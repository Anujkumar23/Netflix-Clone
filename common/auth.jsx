import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWcDvIFoHiNBk1FR7yrtgrm-lwguvQZR4",
  authDomain: "netflix-clone-377f3.firebaseapp.com",
  projectId: "netflix-clone-377f3",
  storageBucket: "netflix-clone-377f3.appspot.com",
  messagingSenderId: "414691231554",
  appId: "1:414691231554:web:9f103cedba09fb3fba2adb",
  measurementId: "G-YLX9VX6198",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const AuthContext = createContext(null);

export const AuthProvider = ({ Children }) => {
  const Auth = useProvideAuth();
  return <AuthContext.Provider value={Auth}>{Children}</AuthContext.Provider>;
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const signUp = (email, password) => {createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      setUser(user);
      return user;
    });
  };
  const signIn = (email, password) => {signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      setUser(user);
      return user;
    }).catch((error)=>{console.log(error)})
      
    ;
  };

  const signOutUser = signOut(auth).then(() => {
    setUser(null);
  });

  return { signUp,user, signIn , signOutUser };
}

export const useAuth = () => useContext(AuthContext);
