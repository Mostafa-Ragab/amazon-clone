import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage";
import SignIn from "./pages/sign-in/sign-in";
function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signin" component={SignIn} />
			</Switch>
		</div>
	);
}

export default App;
