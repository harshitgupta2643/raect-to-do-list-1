import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
    const [ userInput, setUserInput ] = useState('');
    const [ dueDate, setDate ] = useState(new Date());
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleDate = (e) => {
        setDate(e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput,dueDate);
        setUserInput("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="task">
                <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
                <input value={dueDate} type="date" onChange={handleDate} placeholder="Enter Date..." />
            </div>
            <div className="submit">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default ToDoForm;