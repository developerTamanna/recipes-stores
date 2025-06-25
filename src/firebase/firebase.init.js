// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDavDM34gahfqzzlNb386dhVAFGw54Vr8g",
  authDomain: "recipe-store-application.firebaseapp.com",
  projectId: "recipe-store-application",
  storageBucket: "recipe-store-application.firebasestorage.app",
  messagingSenderId: "609594067043",
  appId: "1:609594067043:web:574ea9e119ae1fba289056"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
