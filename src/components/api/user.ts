// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import "firebase/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();

export const getUser = async () => {
  const firebaseUser = auth.currentUser;
  if (!firebaseUser) return null;
  try {
    const response = await fetch(
      `http://localhost:8080/users/${firebaseUser.uid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const user = await response.json();
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
    throw err; // エラーをスローして、呼び出し元でキャッチできるようにします
  }
};

export const postUser = async () => {
  const firebaseUser = auth.currentUser;
  if (!firebaseUser) throw new Error("No current user");

  try {
    const existingUser = await getUser(); // getUser関数を呼び出して結果を取得します

    if (existingUser) {
      console.log("user already exists");
      return existingUser;
    } else {
      const response = await fetch("http://127.0.0.1:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: firebaseUser.uid,
          name: firebaseUser.displayName,
          // email: firebaseUser.email,
          // photoURL: firebaseUser.photoURL,
        }),
      });
      const newUser = await response.json();
      console.log(newUser);
      return newUser;
    }
  } catch (err) {
    console.log(err);
    throw err; // エラーをスローして、呼び出し元でキャッチできるようにします
  }
};
