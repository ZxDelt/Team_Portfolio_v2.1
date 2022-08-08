import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9W6sNGL47ocmzHgwgW2j9B0TrzxPEC0I",
  authDomain: "portfolio-project-5f367.firebaseapp.com",
  projectId: "portfolio-project-5f367",
  storageBucket: "portfolio-project-5f367.appspot.com",
  messagingSenderId: "691822148791",
  appId: "1:691822148791:web:0df3a15b3367d299792132"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
