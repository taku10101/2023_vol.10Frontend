// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import "firebase/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();

type Data = {
  name: string;
  uid: string;
  email: string;
};

const getUser = async () => {
  const firebaseUser = auth.currentUser;
  if (!firebaseUser) return null;
  const response = await fetch(
    `http://localhost:8080/users/${firebaseUser.uid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const getUser = await response.json();
  console.log(getUser);
  return getUser;
};

export async function postUser() {
  const user = auth.currentUser;
  if (!getUser) {
    const response = await fetch("http://127.0.0.1:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user?.uid,
        name: user?.displayName,
        // email: user?.email,
        // photoURL: user?.photoURL,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    console.log("user already exists");
  }
}
