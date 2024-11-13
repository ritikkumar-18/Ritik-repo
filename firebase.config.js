// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv9P3A6Ak_VoKMy_ulkmm4H6k8Y_NflKw",
  authDomain: "otp-project-6f63f.firebaseapp.com",
  projectId: "otp-project-6f63f",
  storageBucket: "otp-project-6f63f.firebasestorage.app",
  messagingSenderId: "681552350933",
  appId: "1:681552350933:web:414f31a51b86116c605c5c",
  measurementId: "G-GJWFLZ9CDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)