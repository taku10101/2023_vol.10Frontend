import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import RequireAuth from "@/components/auth/RequireAuth";
import Header from "@/components/common/Header";
import Editor from "../../components/editor/Editor";
import CustomNodeFlow from "@/components/obj/Graph";

import "firebase/auth";
import { auth } from "../../lib/firebase/client";
import { useParams } from "next/navigation";
import { usePathHooks } from "../../components/common/UsePathHooks";
export default function Home() {
  const params = useParams();
  const pathid = params?.projectId;

  usePathHooks(pathid);
  console.log("page" + pathid);
  return (
    <>
      <Header />

      <RequireAuth>
        <Grid
          container
          display={"flex"}
          sx={{
            height: "calc(100vh - 40px)",
          }}
        >
          <Grid xs={4}>
            <Editor pathid={pathid} />
          </Grid>

          <Grid xs={8}>
            <CustomNodeFlow />
          </Grid>
        </Grid>
      </RequireAuth>
    </>
  );
}
