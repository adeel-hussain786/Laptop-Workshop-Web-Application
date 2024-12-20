// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuu5NtmDrRnkhY4WRzg6SPf6tH4V2JkR4",
  authDomain: "laptop-application-a9177.firebaseapp.com",
  databaseURL: "https://laptop-application-a9177-default-rtdb.firebaseio.com",
  projectId: "laptop-application-a9177",
  storageBucket: "laptop-application-a9177.firebasestorage.app",
  messagingSenderId: "378404540246",
  appId: "1:378404540246:web:a5a497b38aa667341710f7",
  measurementId: "G-SZC334HMV3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics if the measurementId exists
let analytics;
if (firebaseConfig.measurementId) {
  analytics = getAnalytics(app);
}

export { analytics };