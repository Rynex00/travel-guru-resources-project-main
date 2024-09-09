import React, { createContext, useEffect, useState } from 'react'
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth, email,password)
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
   const unsubcribe =  onAuthStateChanged(auth , curentUser => {
      setUser(curentUser);
    });
    return () => {
      unsubcribe();
    }
  } ,[])

  const GoogleUser = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const facebookUser = () => {
    return signInWithPopup(auth, facebookProvider)
  }

  const authInfo = {
    user,
    createUser,
    signIn,
    GoogleUser,
    facebookUser,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider