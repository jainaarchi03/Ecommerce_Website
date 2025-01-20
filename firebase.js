// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'login-76777.firebaseapp.com',
  projectId: 'login-76777',
  storageBucket: 'login-76777.appspot.com',
  messagingSenderId: '1024923077867',
  appId: '1:1024923077867:web:afd45c66ec657c9f4502ae',
  measurementId: 'G-H4VZ8KSQJC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
 const auth = getAuth(app);
 const db = getFirestore(app);

export { auth, db };
