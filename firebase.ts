// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // authentication functionality
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd6TSE7V7hJlc9D-0xlxHmINRHF6KmMhA",
  authDomain: "dv-300-classproject.firebaseapp.com",
  projectId: "dv-300-classproject",
  storageBucket: "dv-300-classproject.firebasestorage.app",
  messagingSenderId: "293214162760",
  appId: "1:293214162760:web:2115a36e3108708cfbed7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// app variable represent the firebase app instance
// initialize all our services for our firebase app
export const auth = getAuth(app); // variable that links to the authentication of my firebase app
export const db = getFirestore(app); // variable that links to the firestore database of my firebase app

