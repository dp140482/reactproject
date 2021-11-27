import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj_7nuhqgLysom7KN1i59oX17NKpfkG3w",
  authDomain: "reactproject-6a09d.firebaseapp.com",
  databaseURL: "https://reactproject-6a09d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactproject-6a09d",
  storageBucket: "reactproject-6a09d.appspot.com",
  messagingSenderId: "40141996720",
  appId: "1:40141996720:web:8af73f6706ab47056d3175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);