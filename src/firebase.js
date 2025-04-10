// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-4bc6b.firebaseapp.com",
  projectId: "real-estate-4bc6b",
  storageBucket: "real-estate-4bc6b.firebasestorage.app",
  messagingSenderId: "560039248052",
  appId: "1:560039248052:web:06985091119259eaed17e1",
  measurementId: "G-MQL2QVQKVS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);
