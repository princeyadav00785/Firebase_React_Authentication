import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHQ3AfaNLWzrNWa6Eu8DQ54e-HYgLYLCA",
  authDomain: "dns-manager-34f43.firebaseapp.com",
  projectId: "dns-manager-34f43",
  storageBucket: "dns-manager-34f43.appspot.com",
  messagingSenderId: "171979109348",
  appId: "1:171979109348:web:948349daa29f631586cdf1",
  measurementId: "G-GZERB3BKB3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
