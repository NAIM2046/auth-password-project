import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../firebase/firebase.config';
  export const AuthContext = createContext(null) ;
  const googleProvider = new GoogleAuthProvider() ;

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setloading] = useState(true) ;
    const createUser = (email , password) =>{
        setloading(true) ;
        return createUserWithEmailAndPassword(auth ,email , password)
    }
    const userLogin =(email , password) =>{
        setloading(true) ;
        return signInWithEmailAndPassword(auth , email , password)
    }
    const singInWithGoogle = ()=>{
        setloading(true) 
        return signInWithPopup(auth , googleProvider) ;
    }
    const logOut =()=>{
        setloading(true) ;
        return signOut(auth) ;
    }


     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser=>{
            console.log("Current value of the current user" , currentUser)
            setUser(currentUser)
            setloading(false) ;
        })
        return ()=>{
            unSubscribe() ;
        }
     },[])

    const authInfo =  {user, createUser , userLogin , logOut , loading, singInWithGoogle}
    return (
        
            <AuthContext.Provider value={authInfo}>
              {children}
            </AuthContext.Provider>
       
    );
};

export default AuthProvider;
AuthProvider.PropTypes={
    children: PropTypes.node
}