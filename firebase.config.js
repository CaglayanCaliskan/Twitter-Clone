// Import the functions you need from the SDKs you need

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDZA0CoZLXecBUfpOOfuWEGK00Uh-CLfnI',

  authDomain: 'tweet-testter.firebaseapp.com',

  projectId: 'tweet-testter',

  storageBucket: 'tweet-testter.appspot.com',

  messagingSenderId: '912562150859',

  appId: '1:912562150859:web:a43c4771bcb371dabbaa4e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
