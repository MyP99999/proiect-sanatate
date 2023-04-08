import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDYFzOa7mFt2r4jISdYIQRo8AR7XffQHQ4",
  authDomain: "proiect-sanatate.firebaseapp.com",
  projectId: "proiect-sanatate",
  storageBucket: "proiect-sanatate.appspot.com",
  messagingSenderId: "412784794204",
  appId: "1:412784794204:web:d7fc384008c64066742499"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }