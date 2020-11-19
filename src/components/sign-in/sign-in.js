import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";

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
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					placeholder="email"
					handleChange={handleChange}
					required
				/>
				<FormInput
					name="password"
					type="password"
					placeholder="password"
					handleChange={handleChange}
					value={password}
					required
				/>
				<div className="buttons">
					<CustomButton type="submit"> Sign in</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
