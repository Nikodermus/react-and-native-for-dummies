import Rebase from "re-base";
import firebase from "firebase";

const firebase_app = firebase.initializeApp({
  apiKey: "AIzaSyD5YgMDQneOqrXGPv5t_4a_6CmYlcVwZKM",
  authDomain: "react-and-native-for-dummies.firebaseapp.com",
  databaseURL: "https://react-and-native-for-dummies.firebaseio.com"
});

const base = Rebase.createClass(firebase_app.database());

// This is a named export
export { firebase_app };

// this is a default export
export default base;