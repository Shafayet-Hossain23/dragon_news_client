import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export const AuthContext = createContext()
const UseContext = ({ children }) => {
    // const user = { name: "Shafayet" }
    const [user, setUser] = useState(null)
    const googleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googlePopUpSignIn = () => {
        signInWithPopup(auth, provider)
    }
    const onAuthState = () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }
    const userInfo = { user, googleRegister, googleSignIn }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UseContext;