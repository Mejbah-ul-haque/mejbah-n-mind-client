import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='register-form'>
            <h2 className='text-center mt-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' />
                <input type="email" name='email' id='' placeholder=' Email Address' required />
                <input type="password" name='password' id='' placeholder='Inter Password' required />
                <input className='bg-dark text-light rounded w-50 register-button' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;