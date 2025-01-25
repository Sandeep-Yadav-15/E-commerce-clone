import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMxHIvztKSXkAUAMWTmcGIpss3sPof5AM",
  authDomain: "ecommerce-clone-b5c95.firebaseapp.com",
  projectId: "ecommerce-clone-b5c95",
  storageBucket: "ecommerce-clone-b5c95.firebasestorage.app",
  messagingSenderId: "419161581957",
  appId: "1:419161581957:web:72fd73afce56db85677cec",
  measurementId: "G-WPXWNJ9X8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-in function
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Signed in successfully:", userCredential.user);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
};

// Sign-up function
export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Signed up successfully:", userCredential.user);
  } catch (error) {
    console.error("Sign-up failed:", error.message);
  }
};