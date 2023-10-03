import RequireAuth from "../components/common/RequireAuth";
import React from "react";

export default function Home() {
  return (
    <RequireAuth>
      <div>
        <h1>Home</h1>
      </div>
    </RequireAuth>
  );
}
