import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8Zqr4kCGKD2uKm4s64o7CfyxXC2kuU2w",
    authDomain: "eshop-e92fe.firebaseapp.com",
    projectId: "eshop-e92fe",
    storageBucket: "eshop-e92fe.appspot.com",
    messagingSenderId: "637441372618",
    appId: "1:637441372618:web:9c2b2ac15bdb886c0f1f33",
    measurementId: "G-511L249GJB"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth();
