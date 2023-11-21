// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF5XIpThXh4GfvPhv01ARLNXUK-GXwk4c",
  authDomain: "fire-auth-futureed.firebaseapp.com",
  projectId: "fire-auth-futureed",
  storageBucket: "fire-auth-futureed.appspot.com",
  messagingSenderId: "842832055215",
  appId: "1:842832055215:web:bef3c06a2ae728b9313d5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);