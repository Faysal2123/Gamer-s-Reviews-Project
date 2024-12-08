import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Layouts/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    // console.log(user)
    const[loading,setLoading]=useState(true)
    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser = (email, password, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
    
                return updateProfile(user, { displayName: name }).then(() => {
                    console.log("User profile updated with displayName:", name);
                    setUser({ ...user, displayName: name }); 
                    return user; 
                });
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error updating user profile:", error);
                throw error; 
            });
    };
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User:", currentUser); // Check user object
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);
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