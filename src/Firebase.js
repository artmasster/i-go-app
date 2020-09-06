import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZiEram_Wzekyu8XcswTVVmDB4McVLxTg",
  authDomain: "i-go-98904.firebaseapp.com",
  databaseURL: "https://i-go-98904.firebaseio.com",
  projectId: "i-go-98904",
  storageBucket: "i-go-98904.appspot.com",
  messagingSenderId: "382295108340",
  appId: "1:382295108340:web:c82a8bbeb0e439f1d3cca1",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
