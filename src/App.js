import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import React , {useState} from 'react';
import Login from './Component/Login';
import Register from './Component/Register';
import ToDoForm from './Component/ToDoForm';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [toDoList, setTodoList] = useState([]);

  const toggleForm = (formName)=>{
    setCurrentForm(formName);
  }
  const addTask =(userInput)=>{
    let copy = [...toDoList];
    copy = [...copy , {id : toDoList.length+1 ,task : userInput}];
    setTodoList(copy);
  }
  return (
    <div>
      {currentForm === 'login' && <Login onFormSwitch={toggleForm} />}
      {currentForm === 'register' && <Register onFormSwitch={toggleForm} />}
      {currentForm === 'to-do-list' && <div className="App">
        <Header />
        <ToDoForm addTask={addTask}/>
      </div>}
    </div>
  );
}

export default App;
