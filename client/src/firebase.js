// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-80c2e.firebaseapp.com",
  projectId: "mern-blog-80c2e",
  storageBucket: "mern-blog-80c2e.appspot.com",
  messagingSenderId: "623967258585",
  appId: "1:623967258585:web:594779443e6f7f8b5afbc8",
  measurementId: "G-NJN38GV6N4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
