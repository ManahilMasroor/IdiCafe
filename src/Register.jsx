import React, { useState } from "react";
import logo from './idi-logo.png';

export const Register = (props) => {
    //create email and password states and set initial empty string states
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    //handling log in submit
    const handleSubmit = (e) => {
        //to prevent refreshing and loosing states
        e.preventDefault();
        console.log(email);
    }
    

    return (
        <div className="auth-form-container">
            <img src={logo} alt="Logo" className="logo"/>
            <h2>Register an Account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name"> Enter your Full Name</label>
            <input value={name} name="name" id="name" placeholder="Full Name"></input>
            <label htmlFor="email">Enter your Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Create a Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password" />
            <button type="submit">Create Account</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}