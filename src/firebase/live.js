// import firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';


// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB4TyhA4Fd7yRQ-ZWwaspZ3PvZg5IRYyM8",
    authDomain: "diamondceramics-bf5ec.firebaseapp.com",
    projectId: "diamondceramics-bf5ec",
    storageBucket: "diamondceramics-bf5ec.appspot.com",
    messagingSenderId: "665941961717",
    appId: "1:665941961717:web:95d08950d696fbedee0ebc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  // export {projectStorage, projectFirestore, timestamp};