// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO4jIdq9La5lbWMny0Loo1PtjfR_2xFJE",
    authDomain: "dragon-news-client-7bf8a.firebaseapp.com",
    projectId: "dragon-news-client-7bf8a",
    storageBucket: "dragon-news-client-7bf8a.appspot.com",
    messagingSenderId: "452479481660",
    appId: "1:452479481660:web:1b8c38fbed14eb45b59039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;