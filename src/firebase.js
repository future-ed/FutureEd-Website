// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_xhk4Yd9-BXaWx2eELQHf6Q2LeiJQAQE",
  authDomain: "futureed-website.firebaseapp.com",
  projectId: "futureed-website",
  storageBucket: "futureed-website.appspot.com",
  messagingSenderId: "130202234812",
  appId: "1:130202234812:web:72451d330c69f8bc5ac5b9",
  measurementId: "G-LTGCCPQRW4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
// const analytics = getAnalytics(app);