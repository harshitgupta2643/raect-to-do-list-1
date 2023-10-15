import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, handleToggle, handleFilter, logout }) => {
    const handleLogout = () => {
        logout();
    };


    return (
        <div className="todo-list-container">
            {toDoList.map((todo) => {
                return <ToDo todo={todo} handleToggle={handleToggle} key={todo.id}/>
            })}
            <div className="clear">
                <button style={{ margin: '20px' }} onClick={handleFilter}>Clear Completed</button>
            </div>
            <div className="logout-button-container">
                <button onClick={handleLogout}>Logout</button>
            </div>

        </div>
    );
};

export default ToDoList;
