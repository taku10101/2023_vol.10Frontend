import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../../lib/firebase/client";
import { onAuthStateChanged } from "firebase/auth";

type Props = {
  children: React.ReactNode;
};

const RequireAuth: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  return <>{children}</>;
};

export default RequireAuth;
