import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input";
import "./sign-up.css";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
// import { auth } from "../../components/firebase/firebase";
const SignUp = () => {
	const [userCredentials, setCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = userCredentials;
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			setCredentials({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.log(error);
		}
	};
	const handleChange = (event) => {
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};
	const { displayName, email, password, confirmPassword } = userCredentials;

	return (
		<div className="sign-up">
			<Link to="/">
				<img
					className="login-logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="logo"
				/>
			</Link>
			<form className="form-signup" onSubmit={handleSubmit}>
				<h1>Sign Up</h1>
				<h4>Name</h4>
				<FormInput
					name="displayName"
					type="text"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<h4>E-mail</h4>
				<FormInput
					name="email"
					type="email"
					value={email}
					placeholder="email"
					onChange={handleChange}
					required
				/>
				<h4>Password</h4>
				<FormInput
					name="password"
					type="password"
					placeholder="password"
					onChange={handleChange}
					value={password}
					required
				/>
				<FormInput
					name="confirmPassword"
					type="password"
					placeholder="confirm password"
					onChange={handleChange}
					value={confirmPassword}
					label="Confirm Password"
					required
				/>
				<button className="register" type="submit">
					{" "}
					register
				</button>
				<p className="detials">
					By signing-in you agree to Amazon's Conditions of Use & Sale. Please
					see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
					Notice.
				</p>
				<Link to="/signin">
					<button className="signin-button" type="submit">
						I already have an Account
					</button>
				</Link>
			</form>
		</div>
	);
};

export default SignUp;
