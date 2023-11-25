// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2g7G3vKqUa9C6VdlOvM_Fn6gayiucb8U",
  authDomain: "futureed-c224f.firebaseapp.com",
  projectId: "futureed-c224f",
  storageBucket: "futureed-c224f.appspot.com",
  messagingSenderId: "602849657960",
  appId: "1:602849657960:web:33a68a1f3291d05ce8e7dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);