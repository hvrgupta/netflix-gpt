// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Z48MkMNQZtYQJuyJ2VJ3peY7N3T36Kc",
  authDomain: "netflix-gpt-b53cb.firebaseapp.com",
  projectId: "netflix-gpt-b53cb",
  storageBucket: "netflix-gpt-b53cb.firebasestorage.app",
  messagingSenderId: "274954047045",
  appId: "1:274954047045:web:dba0469008ea6f3c071d2c",
  measurementId: "G-FGH7QY096S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();