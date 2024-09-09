import React, { createContext, useState } from 'react'
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithPopup(auth, email, password)
  }

  const userSignout = () => {
    return signOut(auth)
  }

  const GoogleUser = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const facebookUser = () => {
    return signInWithPopup(auth, facebookProvider)
  }

  const authInfo = {
    user,
    createUser,
    GoogleUser,
    facebookUser,
    userSignout,
    signIn,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider