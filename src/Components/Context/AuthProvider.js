import React, {createContext, useEffect, useState} from 'react';
import {sendEmailVerification,signInWithEmailAndPassword,updateProfile,createUserWithEmailAndPassword,getAuth,signOut,signInWithPopup,onAuthStateChanged} from 'firebase/auth';
import app from "../Firebase/Firebase.init";
import {Spinner} from "react-bootstrap";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(true);


    const veryfiEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const updateUserProfile = (profile) =>{

        return updateProfile(auth.currentUser,profile)

    }

    const providerLogIn = (provider) => {
        setLoading(true)
        return signInWithPopup (auth,provider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    const createUser = (email,password) => {

        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password);
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUSer) => {

          if (currentUSer === null ||currentUSer.emailVerified){
              setUser(currentUSer)

          }
          setLoading(false)

        })

        return () => unsubscribe();
    },[])


    const authInfo = {veryfiEmail,setLoading,loading,updateUserProfile,user,providerLogIn,logout,createUser,signIn}
    return (
        <div>

            <AuthContext.Provider value={authInfo}>

                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;