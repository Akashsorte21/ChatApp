import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6T7b5jfJIXdlgNF13plxJ4vF1mu6Dk6o",
    authDomain: "firechat-app-c7ec3.firebaseapp.com",
    projectId: "firechat-app-c7ec3",
    storageBucket: "firechat-app-c7ec3.appspot.com",
    messagingSenderId: "606372814364",
    appId: "1:606372814364:web:413eeaecf1c0735c4509d9"
});

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth };