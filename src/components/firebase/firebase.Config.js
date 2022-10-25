// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpgrxRoSxI0FxoQg9JWrq9KgqGbgXf_iE",
  authDomain: "learn-language-clients.firebaseapp.com",
  projectId: "learn-language-clients",
  storageBucket: "learn-language-clients.appspot.com",
  messagingSenderId: "24201104753",
  appId: "1:24201104753:web:ecf7b57537695daaf7fad0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
