import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey:"AIzaSyATczaHTtHh_84Lt9kVykHWmSJzxHAY3Dw",
  authDomain: "gyanpeeth-77039.firebaseapp.com",
  projectId: "gyanpeeth-77039",
  storageBucket: "gyanpeeth-77039.appspot.com",    // <-- corrected here
  messagingSenderId: "584911737233",
  appId: "1:584911737233:web:4c9fd8a65bf9a39dc70a30",
  measurementId: "G-B7HCHPFNGZ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);   // keep commented if you don't use analytics
export const auth = getAuth(app);
