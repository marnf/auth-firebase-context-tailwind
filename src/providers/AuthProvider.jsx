import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.init.js"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const userContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }
    

    useEffect (() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unsubscribe();
        }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signUser,
        logOut
    }

    return (

        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthProvider;