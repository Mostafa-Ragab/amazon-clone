import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input";
import "./sign-in.css";
import { Link } from "react-router-dom";
const SignIn = () => {
	const [useCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const { email, password } = useCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();
	};
	const handleChange = (event) => {
		const { value, name } = event.target;

		setCredentials({ ...useCredentials, [name]: value });
	};
	return (
		<div className="sign-in">
			<Link to="/">
				<img
					className="login-logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="logo"
				/>
			</Link>
			<form className="form-signin" onSubmit={handleSubmit}>
				<h1>Sign in</h1>
				<h4>E-mail</h4>
				<FormInput
					name="email"
					type="email"
					value={email}
					placeholder="email"
					handleChange={handleChange}
					required
				/>
				<h4>Password</h4>
				<FormInput
					name="password"
					type="password"
					placeholder="password"
					handleChange={handleChange}
					value={password}
					required
				/>
				<button className="signin-button" type="submit">
					{" "}
					Sign in
				</button>
				<p className="detials">
					By signing-in you agree to Amazon's Conditions of Use & Sale. Please
					see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
					Notice.
				</p>
				<Link to="/signup">
					<button className="register-button" type="submit">
						Create your Amazon Account
					</button>
				</Link>
			</form>
		</div>
	);
};

export default SignIn;
