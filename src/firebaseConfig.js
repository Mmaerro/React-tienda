// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpLV7Ht2VX1APh0rTXe21GAedv6QlPbDk",
  authDomain: "proyecto-react-84a86.firebaseapp.com",
  projectId: "proyecto-react-84a86",
  storageBucket: "proyecto-react-84a86.appspot.com",
  messagingSenderId: "85954992026",
  appId: "1:85954992026:web:1b3c69dc305b0b3dee4c23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
