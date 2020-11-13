import React from "react";
import sections from "./sections.data";
import "./directory.css";
import MenuItem from "../menu-item/menu-item";
const Directory = () => (
	<div className="product">
		{sections.map(({ id, ...restProps }) => (
			<MenuItem key={id} {...restProps} />
		))}
	</div>
);

export default Directory;
