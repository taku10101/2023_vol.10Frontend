import React from "react";
import { auth } from "../lib/firebase/client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";

const LogoutButton: React.FC = () => {
  const handleGoogleLogout = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      //リダイレクト
      window.location.href = "/login";
      console.log("Google logout successful");
    } catch (error) {
      console.error("Google logout failed:", error);
    }
  };

  return <GoogleButton onClick={handleGoogleLogout}>Logout </GoogleButton>;
};

export default LogoutButton;
