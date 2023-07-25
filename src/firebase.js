// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXIB1ZXdsKCOmoJ2eHt7vMHvlnes0oWxs",
  authDomain: "sumeetbazaarnuapada.firebaseapp.com",
  projectId: "sumeetbazaarnuapada",
  storageBucket: "sumeetbazaarnuapada.appspot.com",
  messagingSenderId: "175049065125",
  appId: "1:175049065125:web:023d63627ed4c45851834c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fdb = getFirestore(app);

export const auth = getAuth(app);

export const db = getFirestore(app);