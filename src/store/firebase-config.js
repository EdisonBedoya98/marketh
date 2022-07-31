// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Ki6q1KkoMDGWXPRDZJWalkIo61O8zUY",
  authDomain: "marketh-550c3.firebaseapp.com",
  projectId: "marketh-550c3",
  storageBucket: "marketh-550c3.appspot.com",
  messagingSenderId: "112700524495",
  appId: "1:112700524495:web:a402bee2f99b027170b4ba",
  measurementId: "G-G1QXLE6VZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 

