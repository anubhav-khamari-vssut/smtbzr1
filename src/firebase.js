// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAewI7Ea1pdUqipe6nhF0FdHucbnm0pZhQ",
  authDomain: "coolageofficial.firebaseapp.com",
  projectId: "coolageofficial",
  storageBucket: "coolageofficial.appspot.com",
  messagingSenderId: "872546420614",
  appId: "1:872546420614:web:89f02b84db0f9b2193ce07",
  measurementId: "G-VPJXNFTBMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fdb = getFirestore(app);

export const auth = getAuth(app);

export const db = getFirestore(app);