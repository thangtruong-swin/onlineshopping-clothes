import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAm9OYXvPhW5vq5I79yd5cLcBu2fsY91sQ",
	authDomain: "onlineshopping-clothes.firebaseapp.com",
	projectId: "onlineshopping-clothes",
	storageBucket: "onlineshopping-clothes.appspot.com",
	messagingSenderId: "792527978616",
	appId: "1:792527978616:web:07588feb3c2ba1033b6d8d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "user", userAuth.uid);
	// console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	// console.log(userSnapshot);
	// console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();
		try {
			await setDoc(userDocRef, { displayName, email, createAt });
		} catch (error) {
			console.log("Error creating the user", error.message);
		}
	}

	return userDocRef;
};
