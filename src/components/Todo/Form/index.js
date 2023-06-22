import React, { useState } from 'react';

const initialFormValues = { text: "", done: false }

function Form({ addTodo, todoList }) {
    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onKeydown = (e) => {
        if (e.key === "Enter") {
            if (form.text === "") {
                console.warn("You can't add empty")
                return false;
            }
            addTodo([...todoList, form]);
            setForm(initialFormValues);
        }
    }

    return (
        <div>
            <input
                className="new-todo"
                name='text'
                type="text"
                placeholder='What needs to be done?'
                value={form.text}
                onChange={onChangeInput}
                onKeyDown={onKeydown}
                autoFocus
            />
        </div>
    );
}

export default Form;