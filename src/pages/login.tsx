import React from "react";
import { auth } from "../lib/firebase/client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "@mui/material";
import GoogleButton from "react-google-button";

const LoginPage: React.FC = () => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      //リダイレクト
      window.location.href = "/home";
      console.log("Google login successful");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <>
      <GoogleButton onClick={handleGoogleLogin}>Login with Google</GoogleButton>
    </>
  );
};

export default LoginPage;
