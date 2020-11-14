import React, { useState } from "react";
import FormInput from "../form-input/form-input";

const SignIn = () => {
	const [useCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		const { value, name } = event.target;
		setCredentials({ ...useCredentials, [name]: value });
	};
	return (
		<div className="sign-in">
			<form>
				<FormInput
					name="email"
					type="email"
					placeholder="email"
					handleChange={handleChange}
				/>
				<FormInput />
			</form>
		</div>
	);
};

export default SignIn;
