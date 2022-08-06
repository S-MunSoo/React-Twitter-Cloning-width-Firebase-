import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASURMENT_ID,
  apiKey: "AIzaSyCOE6ZTdyqO1ei_TFhmlLsxvAVhXe3JQPA",
  authDomain: "twitterclon-98c78.firebaseapp.com",
  projectId: "twitterclon-98c78",
  storageBucket: "twitterclon-98c78.appspot.com",
  messagingSenderId: "612711355527",
  appId: "1:612711355527:web:516a00719c2060b73f5422",
  measurementId: "G-5X6E368Z3L",
};

export const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const dbService = getFirestore();
