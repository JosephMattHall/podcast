// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5Haa_fcunWjR7PleqPpuZsqQ68heavfs",
    authDomain: "podcast-site-78d48.firebaseapp.com",
    projectId: "podcast-site-78d48",
    storageBucket: "podcast-site-78d48.appspot.com",
    messagingSenderId: "283854142727",
    appId: "1:283854142727:web:1182c614116980876619a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
