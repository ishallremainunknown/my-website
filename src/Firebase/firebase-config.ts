// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_tIi3RLlaGQMTx3AV0g_oidQG2hgGNsM",
  authDomain: "my-website-bd601.firebaseapp.com",
  projectId: "my-website-bd601",
  storageBucket: "my-website-bd601.appspot.com",
  messagingSenderId: "549772686760",
  appId: "1:549772686760:web:9388aeae6438cf90eb599d",
  measurementId: "G-RJ8JF75VKM",
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getDatabase(app);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
