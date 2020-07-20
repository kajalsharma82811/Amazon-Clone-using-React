import firebase from "firebase"



const firebasApp = firebase.initializeApp({
  apiKey: "AIzaSyDUC-IM63XwvFs1de8OmxOsvwj4BSbps9U",
  authDomain: "clone-99537.firebaseapp.com",
  databaseURL: "https://clone-99537.firebaseio.com",
  projectId: "clone-99537",
  storageBucket: "clone-99537.appspot.com",
  messagingSenderId: "980161681285",
  appId: "1:980161681285:web:caf17f04d48df47aa056ec",
  measurementId: "G-21H88LY0JH"

});


const auth = firebase.auth();

export{auth}