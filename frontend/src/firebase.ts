import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmlmGEBcrkFCxDqEMcSJrZEN2VNDNv9Ss",
  authDomain: "ecommerce-24095.firebaseapp.com",
  projectId: "ecommerce-24095",
  storageBucket: "ecommerce-24095.appspot.com",
  messagingSenderId: "517165102026",
  appId: "1:517165102026:web:aa3facdd86ce3b62f49533"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
