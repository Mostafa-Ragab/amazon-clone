import React from "react";
import "./checkout.css";
import Header from "../../components/header/header";
const Checkout = ({ currentUser }) => (
	<div className="checkout-page">
		<Header currentUser={currentUser} />
		<p>Your Shopping Basket is empty</p>
	</div>
);
export default Checkout;
