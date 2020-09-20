import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyB6wCwLDHN64azl4RtHquKZOFdwlHWTpq4",
    authDomain: "post-board-d7b1e.firebaseapp.com",
    databaseURL: "https://post-board-d7b1e.firebaseio.com",
    projectId: "post-board-d7b1e",
    storageBucket: "post-board-d7b1e.appspot.com",
    messagingSenderId: "166063070185",
    appId: "1:166063070185:web:d88d7c53cde9c81ed90978",
    measurementId: "G-VLFW832SVZ"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    //If userAuth true (firebase AUTH) but not exist yet in our Database
    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                photoURL,
                friends: [],
                ...additionalData
            })

        } catch (error) {
            console.log('Error Creating User', error.message);
        }
    }
    return userRef;
}
export default firebase;