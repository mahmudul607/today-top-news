// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD1Qo_wK-dsqcbULWdGTzpUN5pCIiO7MOo",
//   authDomain: "today-top-news-6edd2.firebaseapp.com",
//   projectId: "today-top-news-6edd2",
//   storageBucket: "today-top-news-6edd2.appspot.com",
//   messagingSenderId: "1016441429793",
//   appId: "1:1016441429793:web:b7e9cc1fb02687e712e860"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;