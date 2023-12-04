import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateUser = (currentUser, name) => {
    return updateProfile(currentUser, { displayName: name })
  }
  const login = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const google = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  }
  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
    });
    return () => unsubscribe();
  }, [])

  const userInfo = {
    user,
    loader,
    createUser,
    login,
    updateUser,
    google,
    logOut
  }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider