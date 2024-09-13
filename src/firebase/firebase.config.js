// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqucM47qnSeX2jB7Ah1TleyIiFN9uQWgY",
  authDomain: "auth-project-b11ae.firebaseapp.com",
  projectId: "auth-project-b11ae",
  storageBucket: "auth-project-b11ae.appspot.com",
  messagingSenderId: "694265469296",
  appId: "1:694265469296:web:c238fd87d8ffb56a4ad7b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;
