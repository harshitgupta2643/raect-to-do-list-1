import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import React , {useState} from 'react';
import Login from './Component/Login';
import Register from './Component/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div>
      {currentForm === 'login' && <Login onFormSwitch={toggleForm} />}
      {currentForm === 'register' && <Register onFormSwitch={toggleForm} />}
      {currentForm === 'to-do-list' && <div className="App">
        <Header />
      </div>}
    </div>
  );
}

export default App;
