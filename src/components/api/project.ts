import "firebase/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();

export const createProject = async (id: string) => {
  const getUser = async () => {
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) return null;
    const response = await fetch(
      `http://localhost:8080/users/${firebaseUser.uid}/projects`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "test",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
};
