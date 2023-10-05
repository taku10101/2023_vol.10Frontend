import Header from "../components/Header";
import { useState } from "react";
import RequireAuth from "../components/common/RequireAuth";
// import Editor from "../components/editor/Editor";
import React from "react";
import { Box } from "@mui/material";
import ObjTable from "@/components/obj/ObjTable";

export default function Home() {
  const [code, setCode] = useState<string>("console.log('Hello, world!');");
  return (
    <>
      <Header />
      <RequireAuth>
        <Box sx={{ height: "100vh", width: "50vw" }}>
          <ObjTable />
        </Box>
      </RequireAuth>
    </>
  );
}
