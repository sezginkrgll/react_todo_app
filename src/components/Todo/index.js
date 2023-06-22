import React, { useEffect, useState } from 'react'

import Form from './Form';
import List from './List';


function Todo() {
    let items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    const [todoList, setTodoList] = useState(items);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(todoList));
    }, [todoList])

    return (
        <section className="todoapp">

            <header className="header">
                <h1>todos</h1>
                <Form addTodo={setTodoList} todoList={todoList} />
            </header>
            
            <List addTodo={setTodoList} todoList={todoList} />
        </section>
    );
}

export default Todo;