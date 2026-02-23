// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmu5IqVIR4It7ntEOBGZfB_tsimEOBB3c",
    authDomain: "portfolio-dd208.firebaseapp.com",
    projectId: "portfolio-dd208",
    storageBucket: "portfolio-dd208.firebasestorage.app",
    messagingSenderId: "102779224804",
    appId: "1:102779224804:web:20fcefed90953c312de2f1",
    measurementId: "G-MZJH1LML3F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);