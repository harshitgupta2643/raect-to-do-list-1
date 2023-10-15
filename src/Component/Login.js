import React, { useState } from 'react'

const Login = (props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [error,setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email.includes('@gmail.com') && pass.length >= 8){
            setError(null);
            console.log('Login Successful');
            props.onFormSwitch('to-do-list');
        }
        else{
            setError("Incorrect Email and Password . Please Check It. Password Must be of length 8. and Email will contain the '@gmail.com'.");
        }
    }

    return (
        <div className='auth-form-container'>
            <h1>LOGIN</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
                <label htmlFor='password'>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password'/>
                {error && <div className='error-message'>{error}</div>}
                <button type='submit' className='link-btn'>LOGIN</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an Account? Register Here</button>
        </div>
    );
}

export default Login