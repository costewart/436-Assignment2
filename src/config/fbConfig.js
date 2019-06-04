import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCp4aed9R89QwgNSufiekZ_-nXDnRmdOmU",
    authDomain: "assignment2-1d7d7.firebaseapp.com",
    databaseURL: "https://assignment2-1d7d7.firebaseio.com",
    projectId: "assignment2-1d7d7",
    storageBucket: "assignment2-1d7d7.appspot.com",
    messagingSenderId: "657910360091",
    appId: "1:657910360091:web:d7feb61d2fca994f"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true })
  
  export default firebase;