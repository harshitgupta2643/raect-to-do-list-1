import React ,{useState} from 'react'

const ToDoForm = ({addTask}) => {
    const [userInput ,setUserInput] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='task'>
                <input type='text' onChange={(e) => setUserInput(e.target.value)} value={userInput} placeholder='Enter Task' id='task' name='task'/>
            </div>
            <div>
                <button type='submit' className='submit'>Submit</button>
            </div>
        </form>
    )
}

export default ToDoForm