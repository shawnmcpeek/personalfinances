// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "no-key",
  authDomain: "personalfinancesapi.firebaseapp.com",
  projectId: "personalfinancesapi",
  storageBucket: "personalfinancesapi.appspot.com",
  messagingSenderId: "296182797790",
  appId: "1:296182797790:web:5385ceec2eef575cefb94f",
  measurementId: "G-9NDNY5V8T2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
