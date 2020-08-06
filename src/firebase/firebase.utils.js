import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyCJOQ0kbg81Qk9RnQzAiLLQtg3Pl3KfdBI",
    authDomain: "crwn-db-5b0c7.firebaseapp.com",
    databaseURL: "https://crwn-db-5b0c7.firebaseio.com",
    projectId: "crwn-db-5b0c7",
    storageBucket: "crwn-db-5b0c7.appspot.com",
    messagingSenderId: "445506960214",
    appId: "1:445506960214:web:a20fcd531b40611e6c34f7"
};
  
firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

