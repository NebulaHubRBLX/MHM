import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvDI5eqVAp_dd-g27epu_qpIfp6tdkrLw",
  authDomain: "roblox2015-2c465.firebaseapp.com",
  projectId: "roblox2015-2c465",
  storageBucket: "roblox2015-2c465.firebasestorage.app",
  messagingSenderId: "470879880059",
  appId: "1:470879880059:web:b686825b83157ecfd133de",
  measurementId: "G-93LDFMKMSJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
