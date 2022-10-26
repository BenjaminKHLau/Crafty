import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import * as sessionActions from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false)
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const errors = []
        if(email.length < 1) errors.push("Please enter your email")
        if(password.length < 1) errors.push("Please enter your password")
        setErrors(errors)
    },[email, password])


    const onLogin = async (e) => {
        e.preventDefault();
        setIsSubmitted(true)
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
        else if (errors){
            setErrors(errors)
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const demoLogin = (e) => {
        e.preventDefault()
        return dispatch(sessionActions.login("demo@aa.io", "password"))
    }

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <form onSubmit={onLogin} className='login-form'>
            <div className="title">Login</div>
            {isSubmitted && (<div className='error-messages'>
                {errors.map((error, ind) => (
                    <div className='errors' key={ind}>{error}</div>
                ))}
            </div>)}
            {/* <div className='email-div'> */}
                <label className='email-label' htmlFor='email'>Email</label>
                <input
                    className='email-input'
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={updateEmail}
                />
            {/* </div> */}
            {/* <div className='password-div'> */}
                <label htmlFor='password'>Password</label>
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={updatePassword}
                />
                <button className={
                            isSubmitted && errors.length > 0 ? "noob" : "submit-button-login"
                        } type='submit'>Login</button>
                <div></div>
                <button className='demo-button' onClick={demoLogin}>Demo User</button>
            {/* </div> */}
        </form>
    );
};

export default LoginForm;
