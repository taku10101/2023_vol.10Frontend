import Header from "../components/Header";
import { useState } from "react";
import RequireAuth from "../components/common/RequireAuth";
import Editor from "../components/editor/Editor";
import React from "react";

export default function Home() {
  const [code, setCode] = useState<string>("console.log('Hello, world!');");
  return (
    <>
      <Header />
      <RequireAuth>
        <Editor value={code} onChange={(newCode) => setCode(newCode)} />
      </RequireAuth>
    </>
  );
}
