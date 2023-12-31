// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import "firebase/auth";
import { auth } from "../../lib/firebase/client";

export const getUser = async () => {
  const token = await auth.currentUser?.getIdToken(true);

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
  const token = await auth.currentUser?.getIdToken(true);
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
          dbauthorization: token,
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
    throw err;
  }
};

// export const getfile = async () => {

//   try {
//     const response = await fetch(
//       `http://localhost:8080/users/${firebaseUser.uid}/files`,

// query = convert_type
//       query = convert_type
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const user = await response.json();
//     console.log(user);
//     return user;
//   } catch (err) {
//     console.log(err);
//     throw err; // エラーをスローして、呼び出し元でキャッチできるようにします
//   }
// }
