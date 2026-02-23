import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmu5IqVIR4It7ntEOBGZfB_tsimEOBB3c",
    authDomain: "portfolio-dd208.firebaseapp.com",
    projectId: "portfolio-dd208",
    storageBucket: "portfolio-dd208.firebasestorage.app",
    messagingSenderId: "102779224804",
    appId: "1:102779224804:web:20fcefed90953c312de2f1",
    measurementId: "G-MZJH1LML3F",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
