import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithPopup,onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({}) ; 

    const googleLogin = (provider)=>{
        return signInWithPopup(auth,provider)
    }
    const githubLogin = (provider)=> {
        return signInWithPopup(auth,provider)
    }
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{

            console.log('user inside state changed',currentUser);
            setUser(currentUser);

        });
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {user,googleLogin,logOut,createUser,signIn,githubLogin}

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;