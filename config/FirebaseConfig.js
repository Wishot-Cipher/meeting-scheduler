// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgHfG6PaMY_xBC0LqmPtaKzRcD9x939_c",
  authDomain: "church-scheduler-cce33.firebaseapp.com",
  projectId: "church-scheduler-cce33",
  storageBucket: "church-scheduler-cce33.appspot.com",
  messagingSenderId: "18255551992",
  appId: "1:18255551992:web:1426286df413ac4aefca0d",
  measurementId: "G-1XB1S96K2T"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (optional, if you're using it)
const analytics = getAnalytics(app);

// Export the initialized app and analytics if needed elsewhere
export { app, analytics };
