import { createContext, useContext, useEffect, useState } from "react"
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    sendPasswordResetEmail
} from 'firebase/auth'
import { auth, db } from '../firebase'
import {setDoc,doc, collection} from 'firebase/firestore'
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(()=>{     
            const userDocRef = doc(db, 'users', email);
            setDoc(userDocRef, {
                info: {}
            });
            const readProgressRef = collection(userDocRef, 'read progress');

            const personalFinancesDocRef = doc(readProgressRef, 'personal finances');
            setDoc(personalFinancesDocRef, {
                    introduction: false, 
                    money_paths: false, 
                    the_golden_pillars: false, 
                    budgeting: false, 
                    growing_money: false, 
                    zero_to_ten: false, 
                    ten_and_now: false, 
                    rules_of_thumb: false
                
            })
            const taxesDocRef = doc(readProgressRef, 'taxes');
            setDoc(taxesDocRef, {
                    why_taxes: false, 
                    taxes_e: false, 
                    taxes_s: false, 
                    taxes_b: false, 
                    taxes_i: false, 
                    multiple_jobs: false,    
            })
            const careerBuildingDocRef = doc(readProgressRef, 'career building');
            setDoc(careerBuildingDocRef, {
                    cv_building: false, 
                    linkedin_profile_building: false, 
                    interview_preparation: false, 
                    formal_dress_code: false, 
                    negotiation: false, 
                    networking_psychology: false,    
            })
            const independentLivingDocRef = doc(readProgressRef, 'independent living');
            setDoc(independentLivingDocRef, {
                    introduction: false, 
                    moving_out: false, 
                    buy_vs_rent: false, 
                    checklist_moving_out: false, 
                    chores: false, 
                    dream_house_calculation: false,    
            })
            const healthDocRef = doc(readProgressRef, 'health');
            setDoc(healthDocRef, {
                    sleep: false, 
                    exercise: false, 
                    stress_and_anxiety: false, 
                    digital_detox: false, 
                    perfectionism: false, 
                    relationships: false, 
                    insurance: false, 
                    hydration: false
                
            })
            const lifeSkillsDocRef = doc(readProgressRef, 'life skills');
            setDoc(lifeSkillsDocRef, {
                    study_hacks: false, 
                    time_management: false, 
                    workspace_optimisation: false, 
                    procrastination: false,    
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