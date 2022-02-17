// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsoT8oVOfGuw8oGsXr7pyj8_KYPm8IHKk",
  authDomain: "word-85a90.firebaseapp.com",
  projectId: "word-85a90",
  storageBucket: "word-85a90.appspot.com",
  messagingSenderId: "584491423906",
  appId: "1:584491423906:web:aa20218a4236d8c9935ffb",
  measurementId: "G-KN1JQ9PT0H",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
