import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REALTOR_API_KEY,
  authDomain: "realtor-clone-react-5dbf5.firebaseapp.com",
  projectId: "realtor-clone-react-5dbf5",
  storageBucket: "realtor-clone-react-5dbf5.appspot.com",
  messagingSenderId: "762040970153",
  appId: "1:762040970153:web:dc703442d6a0ce827ff2b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
