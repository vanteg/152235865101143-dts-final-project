import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDWtulu9fybX9_30GHPTnnhtTR8DsKGyZM",
  authDomain: "final-dts-project.firebaseapp.com",
  projectId: "final-dts-project",
  storageBucket: "final-dts-project.appspot.com",
  messagingSenderId: "554095737924",
  appId: "1:554095737924:web:a4f10f19fbdbf9797d5011",
  measurementId: "G-06FNRJNMXB",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider}

