import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-sign-up";
function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signin" component={SignInAndSignUp} />
			</Switch>
		</div>
	);
}

export default App;
