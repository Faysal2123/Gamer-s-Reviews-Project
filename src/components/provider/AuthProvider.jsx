import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../Layouts/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const authInfo={
       user,
       setUser,
       userLogin,
       createUser,
       signInWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;