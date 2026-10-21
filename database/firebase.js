// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnOamx94Asv7IC0-VL5Tg-fRJR8diM8mU",
  authDomain: "digital-guide-2-1b273.firebaseapp.com",
  projectId: "digital-guide-2-1b273",
  storageBucket: "digital-guide-2-1b273.firebasestorage.app",
  messagingSenderId: "778178557590",
  appId: "1:778178557590:web:15a4d08b19e8ddab6db4b7"
};

// Initialize Firebase
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// URL'en fra Realtime Database (Belgium = europe-west1)
export const rtdb = getDatabase(
  firebaseApp,
  "https://digital-guide-2-1b273-default-rtdb.europe-west1.firebasedatabase.app/"
);
