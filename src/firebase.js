import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu8wDjWSWJvqlNDjxNC9b0fyDX4dxXyEA",
  authDomain: "users-2bdfd.firebaseapp.com",
  projectId: "users-2bdfd",
  storageBucket: "users-2bdfd.appspot.com",
  messagingSenderId: "444024671936",
  appId: "1:444024671936:web:38ac52c23feb8b8e326725",
};
// init firebase
initializeApp(firebaseConfig);

// init services

export const db = getFirestore();
export const auth = getAuth();
