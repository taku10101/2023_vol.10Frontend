import Header from "../components/Header";
import { useState } from "react";
import RequireAuth from "../components/common/RequireAuth";
import Editor from "../components/editor/Editor";
import React from "react";
import { Box, Grid } from "@mui/material";
import ObjTable from "@/components/obj/ObjTable";

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
          <Grid
            xs={12}
            sx={{
              backgroundColor: "#eae",
            }}
            container
            display={"flex"}
          >
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
