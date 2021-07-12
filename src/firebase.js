import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQQHSD4GUtCc4X1DtmHHKTct7cw9t4Xk4",
  authDomain: "socio-6f722.firebaseapp.com",
  projectId: "socio-6f722",
  storageBucket: "socio-6f722.appspot.com",
  messagingSenderId: "573426282671",
  appId: "1:573426282671:web:ca095997364b54cac6245a",
  measurementId: "G-RSHEJ035NG"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export default db;
export {auth, provider}