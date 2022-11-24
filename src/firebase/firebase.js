import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL7RZZaHWFkiCXsT4UpQRNIpBJL6ScvS4",
  authDomain: "gl-machine-task.firebaseapp.com",
  projectId: "gl-machine-task",
  storageBucket: "gl-machine-task.appspot.com",
  messagingSenderId: "216564510013",
  appId: "1:216564510013:web:8432da9d0605589fd6e954",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Below the import code
const db = getFirestore(app);
export default db;
