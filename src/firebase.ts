// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserSessionPersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY3GpLUKqgPkmo4ImtjZM7AjnbjouMriM",
  authDomain: "expense-tracking-chrisen-dev.firebaseapp.com",
  projectId: "expense-tracking-chrisen-dev",
  storageBucket: "expense-tracking-chrisen-dev.appspot.com",
  messagingSenderId: "820559788746",
  appId: "1:820559788746:web:fe12fea3930d2a5accd233",
  measurementId: "G-V2QZ8FYGR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, { persistence: browserSessionPersistence })
const db = getFirestore(app)

export { auth, db }