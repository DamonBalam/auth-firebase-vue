import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCGkxYowjFed5B1-n6-bwSsBL938uplFY4',
    authDomain: 'auth-firebase-vue-c89b3.firebaseapp.com',
    databaseURL: 'https://auth-firebase-vue-c89b3.firebaseio.com',
    projectId: 'auth-firebase-vue-c89b3',
    storageBucket: 'auth-firebase-vue-c89b3.appspot.com',
    messagingSenderId: '634572230250',
    appId: '1:634572230250:web:ae3d30375c3c4392994413',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
