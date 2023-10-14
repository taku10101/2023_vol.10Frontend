import React from "react";
import { auth } from "../../lib/firebase/client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { postUser } from "../api/user";
import { Box, Button } from "@mui/material";

const LoginButton: React.FC = () => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const user = auth.currentUser;
    try {
      await signInWithPopup(auth, provider);

      await postUser();
      window.location.href = "/overview";
      console.log("Google login successful");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };
  return <Button onClick={handleGoogleLogin}>Login with Google</Button>;
};
export default LoginButton;
