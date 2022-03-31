// Import the functions you need from the SDKs you need

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyB7WjN1CKBms1LO4RQpKqi7q7kJmplH32A',

  authDomain: 'caglayan-twitter-clone.firebaseapp.com',

  projectId: 'caglayan-twitter-clone',

  storageBucket: 'caglayan-twitter-clone.appspot.com',

  messagingSenderId: '150411112296',

  appId: '1:150411112296:web:6f3e2d6b6ab32b9f1cf0dd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
