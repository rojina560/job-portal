import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContex';
import auth from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoggle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signoutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo ={
        user,loading,createUser,signInUser,signoutUser,signInWithGoggle
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentuser =>{
            setUser(currentuser);
            console.log('state captured',currentuser);
            setLoading(false)
            return()=>{
                unSubscribe()
            }
        })
    },[])
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;