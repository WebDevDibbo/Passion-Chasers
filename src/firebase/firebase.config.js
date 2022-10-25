// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwvYpvt5WWFQfMqX2S7AWMmT-JjQfGgrI",
  authDomain: "learning-app-auth.firebaseapp.com",
  projectId: "learning-app-auth",
  storageBucket: "learning-app-auth.appspot.com",
  messagingSenderId: "679107080060",
  appId: "1:679107080060:web:3e305187178b761e74bef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;