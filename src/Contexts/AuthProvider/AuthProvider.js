import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null) ; 

    const googleLogin = (provider)=>{
        return signInWithPopup(auth,provider)

    }

    

    // const createUser = (auth,email,password) =>{
    //     return createUserWithEmailAndPassword(auth,email,password)
    // }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{

            console.log('user inside state changed',currentUser);
            setUser(currentUser);

        });
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {user,googleLogin}

    return (
       <AuthContext.Provider value={authInfo}>

        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;