import "firebase/auth";
import { getAuth } from "firebase/auth";
import { auth } from "../../lib/firebase/client";
export const createProject = async () => {
  const firebaseUser = auth.currentUser;
  if (!firebaseUser) return null;
  const token = await auth.currentUser?.getIdToken(true);
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
  return Promise.resolve(data);
};

// export const getProjectsById = async () => {
//   const newProject = await createProject();
//   const project_id = newProject.project_id;

//   const firebaseUser = auth.currentUser;
//   if (!firebaseUser) return null;

//   const response = await fetch(
//     `http://localhost:8080/users/${firebaseUser.uid}/projects/${project_id}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();

//   console.log(data);
//   return Promise.resolve(data);
// };
