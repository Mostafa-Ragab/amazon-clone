import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage";
import SignIn from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import Checkout from "./pages/checkout-page/checkout-page";
class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});

					console.log(this.state);
				});
			}

			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/checkout"
						component={(_) => <Checkout currentUser={this.state.currentUser} />}
					/>
					<Route
						exact
						path="/"
						component={(_) => <HomePage currentUser={this.state.currentUser} />}
					/>
					<Route
						exact
						path="/signin"
						render={() =>
							this.state.currentUser ? <Redirect to="/" /> : <SignIn />
						}
					/>
					<Route
						exact
						path="/signup"
						render={() =>
							this.state.currentUser ? <Redirect to="/" /> : <SignUp />
						}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
