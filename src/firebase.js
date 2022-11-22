/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword } from 'firebase/auth'
 
import { getStorage } from "firebase/storage";
import { getDatabase, ref} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAtmXu7_M791qRtpHRzQCbOEFrA7Z__UxE",
authDomain: "wishapp-723f5.firebaseapp.com",
databaseURL: "https://wishapp-723f5-default-rtdb.firebaseio.com",
projectId: "wishapp-723f5",
storageBucket: "wishapp-723f5.appspot.com",
messagingSenderId: "730191617144",
appId: "1:730191617144:web:33f57a47277da3d601e18d",
measurementId: "G-94YX98GLH1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const storage = getStorage(app);
export const database = getDatabase(app);