// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-h9v1MuJKLvBPOE1z23ysnUcjXxzk_3U",
  authDomain: "cashcat-99a0c.firebaseapp.com",
  projectId: "cashcat-99a0c",
  storageBucket: "cashcat-99a0c.firebasestorage.app",
  messagingSenderId: "1014983279997",
  appId: "1:1014983279997:web:57f44694fdb1b98245b814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = firebase.firestore();