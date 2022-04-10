// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACOY_I2Xv2OAyYVF-6YLXV9GJvx9XnGWI",
  authDomain: "emajon-simple-5a7f3.firebaseapp.com",
  projectId: "emajon-simple-5a7f3",
  storageBucket: "emajon-simple-5a7f3.appspot.com",
  messagingSenderId: "1017925957879",
  appId: "1:1017925957879:web:dd55616f5c1ca0f46c3bf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
