import React from "react";
import "./form-input.css";
const FormInput = ({ handleChange, ...restProps }) => (
	<div className="group">
		<input className="form-input" onChange={handleChange} {...restProps} />
	</div>
);

export default FormInput;
