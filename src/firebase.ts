import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbyC91-INa_y_7ghUOqmbh36m7V5BNQ-I",
  authDomain: "mindscribe-40af0.firebaseapp.com",
  projectId: "mindscribe-40af0",
  storageBucket: "mindscribe-40af0.firebasestorage.app",
  messagingSenderId: "792348999156",
  appId: "1:792348999156:web:728c01c73b592dc39e0da1",
  measurementId: "G-W7QX5C42G5",
};

const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const auth = getAuth(app);
