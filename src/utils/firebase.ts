// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAX_1Jl30GX9EJ6RSn-bvYwZYhnibgUsuw",
    authDomain: "vue-firebase-c280a.firebaseapp.com",
    projectId: "vue-firebase-c280a",
    storageBucket: "vue-firebase-c280a.firebasestorage.app",
    messagingSenderId: "182879177582",
    appId: "1:182879177582:web:1ef61ab46f97a7d0fb8f7f"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };