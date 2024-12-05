import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Layouts/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return()=>{
            unSubscribe();
        }
    })
    const logOut=()=>{
      return signOut(auth)
    }

    const authInfo={
       user,
       setUser,
       userLogin,
       createUser,
       signInWithGoogle,
       loading,
       logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;