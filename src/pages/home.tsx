import Header from "../components/Header";
import RequireAuth from "../components/common/RequireAuth";
import Editor from "../components/editor/Editor";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <RequireAuth>
        <Editor />
      </RequireAuth>
    </>
  );
}
