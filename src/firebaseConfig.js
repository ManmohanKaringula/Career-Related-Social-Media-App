// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCThMhMDQNfRuBJWNQaZe83iOtJxpg6DPI",
    authDomain: "career-app-f658e.firebaseapp.com",
    projectId: "career-app-f658e",
    storageBucket: "career-app-f658e.appspot.com",
    messagingSenderId: "896597446113",
    appId: "1:896597446113:web:8a99e9c38b24cb375a56a0",
    measurementId: "G-ENGYMYYNVN"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth()

  export {auth, db};

  