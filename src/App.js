import './App.css';
import Header from './Component/Header';
import React , {useState} from 'react';
import Login from './Component/Login';
import Register from './Component/Register';
import ToDoForm from './Component/ToDoForm';
import ToDoList from './Component/ToDoList';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [toDoList, setToDoList] = useState([]);
  const backgroundClass = currentForm === 'to-do-list' ? 'todolist-bg' : '';

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return task.complete===false;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ,dueDate) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput , complete:false,dueDate :dueDate}];
    setToDoList(copy);
  }

  const logout = () => {
    setCurrentForm('login');
};
  
  return (
    <div className={`App ${backgroundClass}`}>
      {currentForm === 'login' && <Login onFormSwitch={toggleForm} />}
      {currentForm === 'register' && <Register onFormSwitch={toggleForm} />}
      {currentForm === 'to-do-list' && (
      <div>
        <Header />
        <ToDoList toDoList = {toDoList} handleFilter={handleFilter} handleToggle={handleToggle} logout = {logout}/>
        <ToDoForm addTask={addTask}/>
      </div>)}
    </div>
  );
}

export default App;
