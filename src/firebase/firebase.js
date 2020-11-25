import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDYahsr6h4Y6pphAp8mMYh_xTyRgulxVRU",
	authDomain: "clone-4ce50.firebaseapp.com",
	databaseURL: "https://clone-4ce50.firebaseio.com",
	projectId: "clone-4ce50",
	storageBucket: "clone-4ce50.appspot.com",
	messagingSenderId: "405300957004",
	appId: "1:405300957004:web:f713e1add1bf7e8ecec9e9",
	measurementId: "G-2EZW0DN1WQ",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/$userAuth.uid`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
		return userRef;
	}
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firebase };
