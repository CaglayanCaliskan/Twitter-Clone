// Import the functions you need from the SDKs you need

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyBD6R_KxOca4ZiIZzvCDb-hiRIJXZMtdW4',

  authDomain: 'next-twitter-clone-17b78.firebaseapp.com',

  projectId: 'next-twitter-clone-17b78',

  storageBucket: 'next-twitter-clone-17b78.appspot.com',

  messagingSenderId: '694904202910',

  appId: '1:694904202910:web:3937c4cecdc444fd99fd8f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
