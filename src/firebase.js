import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
  
const firebaseConfig = {
  apiKey: "AIzaSyDWRRpDnd75E8UTWkvNiulCPpVyZ9GVT0Y",
  authDomain: "react-authentication-e88a7.firebaseapp.com",
  projectId: "react-authentication-e88a7",
  storageBucket: "react-authentication-e88a7.appspot.com",
  messagingSenderId: "640879010885",
  appId: "1:640879010885:web:3957606dc5bc5fbe78af2c",
  measurementId: "G-MS6D5DGE2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;