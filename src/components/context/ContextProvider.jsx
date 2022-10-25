import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.Config";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //   const user = { name: "Rakibul" };

  // catch user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      //   setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
