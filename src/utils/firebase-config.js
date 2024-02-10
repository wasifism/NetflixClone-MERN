import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
  authDomain: "react-auth-6785y.firebaseapp.com",
  projectId: "react-auth-6745p",
  storageBucket: "react-auth-6788d.appspot.com",
  messagingSenderId: "131797845024",
  appId: "1:131797845021:web:3f34rw436e2b89ca5d32f4",
  measurementId: "G-VWPBR1NSZE",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
