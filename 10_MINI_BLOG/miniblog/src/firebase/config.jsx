import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKrW8V9DEGpn7UzUdtNieZekHHtfOuD8c",
  authDomain: "miniblog-1dcfa.firebaseapp.com",
  projectId: "miniblog-1dcfa",
  storageBucket: "miniblog-1dcfa.firebasestorage.app",
  messagingSenderId: "116532581488",
  appId: "1:116532581488:web:b6383924e18979289090b5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
