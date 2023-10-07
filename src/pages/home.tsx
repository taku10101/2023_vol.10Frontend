import React from "react";
import { Box, Grid } from "@mui/material";
import ObjTable from "../components/obj/ObjTable";
import RequireAuth from "@/components/auth/RequireAuth";

import Header from "@/components/common/Header";
import Editor from "../components/editor/Editor";

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
          <Grid xs={12} container display={"flex"}>
            <Grid xs={4}>
              <Editor />
            </Grid>

            <Grid xs={8}>
              <ObjTable />
            </Grid>
          </Grid>
        </RequireAuth>
      </Box>
    </>
  );
}
