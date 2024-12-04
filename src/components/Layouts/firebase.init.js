// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABZx1Rbou1t3YHxtULpjLZKG3GfZOw2DA",
  authDomain: "assignment-10-212c3.firebaseapp.com",
  projectId: "assignment-10-212c3",
  storageBucket: "assignment-10-212c3.firebasestorage.app",
  messagingSenderId: "993165629109",
  appId: "1:993165629109:web:2387548944b7de6e6e10fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth