import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDMhfeiWQDT27tu6aZdqMKEo8o9AwgwBto",
    authDomain: "react-project-management.firebaseapp.com",
    databaseURL: "https://react-project-management.firebaseio.com",
    projectId: "react-project-management",
    storageBucket: "react-project-management.appspot.com",
    messagingSenderId: "1015522890780"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots : true})

export default firebase