// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5_RXPV6MXmYWthLwjIsz_4tM2BMV4oI8",
  authDomain: "netflix-78f77.firebaseapp.com",
  projectId: "netflix-78f77",
  storageBucket: "netflix-78f77.appspot.com",
  messagingSenderId: "241546428678",
  appId: "1:241546428678:web:34828de24e8308ee445e87",
  measurementId: "G-SP08XGH6DT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
