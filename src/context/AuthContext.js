import { createContext, useContext, useEffect, useState } from "react"
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    sendPasswordResetEmail
} from 'firebase/auth'
import { auth, db } from '../firebase'
import {setDoc,doc} from 'firebase/firestore'
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            return setDoc(doc(db, 'users', email), {
            info: {}
        })
        })
        .catch(error => {
            console.error('Error creating user:', error)
        })
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const sendResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);

        })

        return unsubscribe;
    },[])

    return (
        <UserContext.Provider value={{createUser, user, signIn, sendResetEmail}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}