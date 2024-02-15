// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4CIa48F4dOL7-3Pua45UJrmOMNENSXLM",
  authDomain: "user-email-password-e92ca.firebaseapp.com",
  projectId: "user-email-password-e92ca",
  storageBucket: "user-email-password-e92ca.appspot.com",
  messagingSenderId: "132397855116",
  appId: "1:132397855116:web:17f4c99e50d1d43b4126a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;