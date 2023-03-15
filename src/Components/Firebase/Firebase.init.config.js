// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvYVl86Y_8sIHpcvHLZd-p9-_8L6lRPWI",
    authDomain: "nature-world-2c964.firebaseapp.com",
    projectId: "nature-world-2c964",
    storageBucket: "nature-world-2c964.appspot.com",
    messagingSenderId: "543071984310",
    appId: "1:543071984310:web:4a493a5c132f74fdc32417",
    measurementId: "G-T87V3X1D7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;