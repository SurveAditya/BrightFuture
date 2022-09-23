import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "final-firebase-5213e.firebaseapp.com",
  projectId: "final-firebase-5213e",
  storageBucket: "final-firebase-5213e.appspot.com",
  messagingSenderId: "846227101050",
  appId: "1:846227101050:web:cf27461050f437238472c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);