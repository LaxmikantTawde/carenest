// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDse6w1pQoVYkC-foddzQvwXfVvP26JgTE',
  authDomain: 'care-c163e.firebaseapp.com',
  projectId: 'care-c163e',
  storageBucket: 'care-c163e.appspot.com',
  messagingSenderId: '118829992785',
  appId: '1:118829992785:web:1494ea0a6adff56801a170',
  measurementId: 'G-6C3KV16SLE'
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);