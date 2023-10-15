import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import RequireAuth from "@/components/auth/RequireAuth";
import Header from "@/components/common/Header";
import Editor from "../../components/editor/Editor";
import CustomNodeFlow from "../../components/obj/CustomNodeFlow";

import "firebase/auth";
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
          xs={12}
          container
          display={"flex"}
          sx={{
            height: "calc(100vh - 40px)",
          }}
        >
          <Grid xs={4}>
            <Editor pathid={pathid} />
          </Grid>

          <Grid
            xs={8}
            sx={{
              paddingLeft: "25px",
            }}
          >
            <CustomNodeFlow />
          </Grid>
        </Grid>
      </RequireAuth>
    </>
  );
}
