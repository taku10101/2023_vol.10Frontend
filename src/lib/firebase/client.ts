import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZ859XRq1mWBJGKKlEpArYzZ6LNIMqXHA",
  authDomain: "geek-vol10.firebaseapp.com",
  projectId: "geek-vol10",
  storageBucket: "geek-vol10.appspot.com",
  messagingSenderId: "104071342406",
  appId: "1:104071342406:web:2435d309c7534b6adfdd47",
  measurementId: "G-MWBJ5S0FKV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
