// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD-i9Uyunq1ebVbTfxi57vANjiiXIa__Gw",
  authDomain: "andres-rivas-portfolio.firebaseapp.com",
  projectId: "andres-rivas-portfolio",
  storageBucket: "andres-rivas-portfolio.appspot.com",
  messagingSenderId: "880135263359",
  appId: "1:880135263359:web:fad578558ddea44a711b4a",
  measurementId: "G-NLDHTGPNC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export {storage};