import React, { useEffect, useState } from 'react';

function List({ addTodo, todoList }) {
    const [filterText, setFilterText] = useState("All");

    const active = todoList.filter((item) => {
        return item.done === false
    });

    const completed = todoList.filter((item) => {
        return item.done === true
    });

    const allCompleted = () => {
        if (todoList.length != completed.length) {
            todoList.map((item) => (item.done = true));
            addTodo([...todoList])
        } else {
            todoList.map((item) => (item.done = false));
            addTodo([...todoList])
        }
    }

    const clearCompleted = () => {
        addTodo([...active])
    }

    useEffect(() => {
        switch (filterText) {
            case "Active":
                loop(".completed", true);
                loop(".active", false);
                break;
            case "Completed":
                loop(".active", true);
                loop(".completed", false);
                break;
            default:
                loop(".todo-list>li", false);
        }
    }, [todoList])

    const onChangeCheckbox = (e) => {
        todoList[e.target.id].done = e.target.checked
        addTodo([...todoList])
    }

    const removeItem = (e) => {
        const newTodoList = todoList.filter((_, i) => i != e.target.name)
        addTodo([...newTodoList]);
    }

    const loop = (listClass, visibility) => {
        const list = document.querySelectorAll(listClass);
        for (let i = 0; i < list.length; i++) {
            list[i].hidden = visibility;
        }
    }

    const filterFunc = (e) => {
        //setFilterText(e.target.value)
        document.querySelector(".selected").classList.remove("selected");
        e.target.classList = "selected"
        switch (e.target.innerHTML) {
            case "Active":
                loop(".completed", true);
                loop(".active", false);
                setFilterText("Active");
                break;
            case "Completed":
                loop(".active", true);
                loop(".completed", false);
                setFilterText("Completed");
                break;
            default:
                loop(".todo-list>li", false);
                setFilterText("All");
        }
    }

    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all" onClick={allCompleted}>
                    Mark all as complete
                </label>
                <ul className='todo-list'>
                    {
                        todoList.map((item, i) => (
                            <li key={i} id={`item${i}`} className={item.done == true ? "completed" : "active"}>
                                <div className='view'>
                                    <input
                                        className='toggle'
                                        id={i}
                                        type="checkbox"
                                        checked={item.done}
                                        onChange={onChangeCheckbox}
                                    />
                                    <label htmlFor={i}>{item.text}</label>
                                    <button className="destroy" name={i} onClick={removeItem}></button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{active.length}</strong>
                    &nbsp;items left
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/" className="selected" onClick={filterFunc}>All</a>
                    </li>
                    <li>
                        <a href="#/" onClick={filterFunc}>Active</a>
                    </li>
                    <li>
                        <a href="#/" onClick={filterFunc}>Completed</a>
                    </li>
                </ul>
                <button
                    hidden={completed.length == 0 ? true : false}
                    className="clear-completed"
                    onClick={clearCompleted}
                >
                    Clear completed
                </button>
            </footer>
        </div>
    );
}

export default List;