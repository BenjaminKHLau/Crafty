import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignUpForm.css";

const SignUpForm = () => {
	const [errors, setErrors] = useState([]);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const user = useSelector((state) => state.session.user);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const errors = [];

		if (username.length < 1) errors.push("Please provide a username");
		if (username.length > 20)
			errors.push("Username must be 1-20 characters long");
		if (email.length < 5) errors.push("Please provide a valid email");
		if (email.length > 35) errors.push("Email must be 5-35 characters long");
		if (password.length < 1) errors.push("Enter a password");
		if (password !== repeatPassword) errors.push("Passwords must match");

		setErrors(errors);
	}, [username, email, password, repeatPassword]);

	const onSignUp = async (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		if (
			password === repeatPassword &&
			username.length < 21 &&
			email.length < 36
		) {
			const data = await dispatch(signUp(username, email, password));
			if (data) {
				setErrors(data);
			} else if (errors) {
				setErrors(errors);
			}
		}
	};

	const updateUsername = (e) => {
		setUsername(e.target.value);
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const updateRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<form className="sign-up-form" onSubmit={onSignUp}>
			<div className="title">Sign Up</div>
			{isSubmitted && (
				<div>
					{errors.map((error, ind) => (
						<div className="errors" key={ind}>
							{error}
						</div>
					))}
				</div>
			)}
			{/* <div className='username'> */}
			<label>Username</label>
			<input
				type="text"
				name="username"
				onChange={updateUsername}
				placeholder="Please provide a username 1-20 characters long"
				value={username}
			></input>
			{/* </div> */}
			{/* <div className='email'> */}
			<label>Email</label>
			<input
				type="email"
				name="email"
				onChange={updateEmail}
				placeholder="Please provide an email 5-35 characters long"
				value={email}
			></input>
			{/* </div> */}
			{/* <div className='password'> */}
			<label>Password</label>
			<input
				type="password"
				name="password"
				onChange={updatePassword}
				placeholder="Enter a secure Password"
				value={password}
			></input>
			{/* </div> */}
			{/* <div className='repeat-password'> */}
			<label>Repeat Password</label>
			<input
				type="password"
				name="repeat_password"
				onChange={updateRepeatPassword}
				placeholder="Repeat Password"
				value={repeatPassword}
				// required={true}
			></input>
			{/* </div> */}
			<button
				className={
					isSubmitted && errors.length > 0 ? "noob" : "submit-button-login"
				}
				type="submit"
			>
				Sign Up
			</button>
		</form>
	);
};

export default SignUpForm;
