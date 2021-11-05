import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "Replace info here with own Firebase apikey info",
    authDomain: "Replace info here with own Firebase info",
    projectId: "Replace info here with own Firebase info",
    storageBucket: "Replace info here with own Firebase info",
    messagingSenderId: "Replace info here with own Firebase info",
    appId: "Replace info here with own Firebase info"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;