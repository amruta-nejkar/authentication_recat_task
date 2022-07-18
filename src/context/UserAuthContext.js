import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  // GoogleAuthProvider,
  // signInWithPopup,
} from "firebase/auth";
import {auth} from '../firebase';


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const logIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }
  const signUp=(email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }
 const logOut=() =>{
    return signOut(auth);
  }
  // function googleSignIn() {
  //   const googleAuthProvider = new GoogleAuthProvider();
  //   return signInWithPopup(auth, googleAuthProvider);
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth", currentUser);
      setUser(currentUser);
    });
   

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}