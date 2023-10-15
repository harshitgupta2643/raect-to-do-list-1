import React , {useState} from 'react';

const Register = (props) => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
    const [error,setError] =useState(null);


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email.includes('@gmail.com') && pass.length >= 8 && name.length>0){
            setError(null);
            console.log('Login Successful');
            props.onFormSwitch('to-do-list');
        }
        else if(name.length===0){
            setError("Please Fill The Name");
        }
        else{
            setError("Incorrect Email and Password . Please Check It. Password Must be of length 8. and Email will contain the '@gmail.com'.");
        }
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
            <h1>REGISTER</h1>
            <form className='register-form' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type ='name' id='name' placeholder='Enter Name' name='name' />
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type ='email' id='email' placeholder='yourname@gmail.com' name='email' />
                <label htmlFor='password'>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type ='password' id='password' placeholder='********' name='password' />
                {error && <div className='error-message'>{error}</div>}
                <button className='link-btn' type='submit'  onClick={() => props.onFormSwitch('to-do-list')}>Register</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an Account? Login Here</button>
        </div>
    )
}

export default Register