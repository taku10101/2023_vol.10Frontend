import React from "react";
import { Box, Grid } from "@mui/material";
import RequireAuth from "@/components/auth/RequireAuth";

import Header from "@/components/common/Header";
import Editor from "../../components/editor/Editor";

import Graph from "@/components/obj/Graph";

export default function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          height: "calc(100vh - 40px)",
        }}
      >
        <RequireAuth>
          <Grid container display={"flex"}>
            <Grid xs={4}>
              <Editor />
            </Grid>

            <Grid xs={8}>
              <Graph />
            </Grid>
          </Grid>
        </RequireAuth>
      </Box>
    </>
  );
}
