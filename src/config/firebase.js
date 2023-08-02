import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyByWSzvwGSwkZYt8Zgt5KZRQ3yJ1_MBLK0",
  authDomain: "onile-cfdfb.firebaseapp.com",
  projectId: "onile-cfdfb",
  storageBucket: "onile-cfdfb.appspot.com",
  messagingSenderId: "987323627908",
  appId: "1:987323627908:web:bf8f2d821754738ad8c5d1",
  measurementId: "G-F3XRQPL89X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)

export const db = getFirestore(app)