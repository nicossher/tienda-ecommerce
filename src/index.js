import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhKdTbjn5rn80jSqulsvdXJCMWyVUrwWE",
  authDomain: "nico-ecomerce.firebaseapp.com",
  projectId: "nico-ecomerce",
  storageBucket: "nico-ecomerce.appspot.com",
  messagingSenderId: "337760097695",
  appId: "1:337760097695:web:ac01d2d625d72c0cca59aa",
  measurementId: "G-ZHB12H65V0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
