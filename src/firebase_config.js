// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxrgENsEW0nQc0vIEs7tjzXv0PR0ehv-k",
  authDomain: "levin-e1c22.firebaseapp.com",
  projectId: "levin-e1c22",
  storageBucket: "levin-e1c22.appspot.com",
  messagingSenderId: "831383391500",
  appId: "1:831383391500:web:d026af8406b9f56520cd29",
  measurementId: "G-EML742YQLL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
