import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.Config";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   const user = { name: "Rakibul" };

  // user email and password login method
  const userEmailPassLogin = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign with email and password
  const userSign = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user log out
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // sign in with google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogleMethod = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // login with facebook popup method
  const fbProvider = new FacebookAuthProvider();
  const signInWithFacebookMethod = () => {
    setLoading(true);
    return signInWithPopup(auth, fbProvider);
  };

  // catch user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
      //   setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    userEmailPassLogin,
    userLogOut,
    userSign,
    signInWithGoogleMethod,
    signInWithFacebookMethod,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
