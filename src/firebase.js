import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZXYYwHCzLRhD02GSCdgdAfaBQuJwYgWg",
    authDomain: "ai-chatbot-af25a.firebaseapp.com",
    projectId: "ai-chatbot-af25a",
    storageBucket: "ai-chatbot-af25a.appspot.com",
    messagingSenderId: "215000851110",
    appId: "1:215000851110:web:848867034522ce16baca67",
    measurementId: "G-4JZM83C25L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {app, auth, db};