import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBWasoBXY5geScaOjTO9-ocQ3lmnQ4h-R8",
    authDomain: "tickets-app-263e9.firebaseapp.com",
    projectId: "tickets-app-263e9",
    storageBucket: "tickets-app-263e9.appspot.com",
    messagingSenderId: "839774348213",
    appId: "1:839774348213:web:a656e7146c64eb04acaffc",
    measurementId: "G-WPY2L26N9T"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage}

