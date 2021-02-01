import firebase from 'firebase';

require ('@firebase/firestore')

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDqrnYqJcrEcZXJt7GYtF7yzHeBXNgAeMs",
  authDomain: "barter-system-3bc15.firebaseapp.com",
  databaseURL: "https://barter-system-3bc15.firebaseio.com",
  projectId: "barter-system-3bc15",
  storageBucket: "barter-system-3bc15.appspot.com",
  messagingSenderId: "71879846217",
  appId: "1:71879846217:web:ef4452a83029a3109e1298"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();