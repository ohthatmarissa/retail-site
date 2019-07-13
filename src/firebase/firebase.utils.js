import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5PrIq2cqzkkuJCkjp0mrwhYKz9SX3370",
    authDomain: "retail-site-b4d30.firebaseapp.com",
    databaseURL: "https://retail-site-b4d30.firebaseio.com",
    projectId: "retail-site-b4d30",
    storageBucket: "",
    messagingSenderId: "348970359981",
    appId: "1:348970359981:web:dbbfb868bf1499b6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account '});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;