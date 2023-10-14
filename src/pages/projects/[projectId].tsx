import React from "react";
import { Box, Grid } from "@mui/material";
import RequireAuth from "@/components/auth/RequireAuth";
import Header from "@/components/common/Header";
import Editor from "../../components/editor/Editor";
import Graph from "@/components/obj/Graph";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "firebase/auth";
import { auth } from "../../lib/firebase/client";
import { useParams } from "next/navigation";

export default function Home() {
  const firebaseUser = auth.currentUser;
  const user_id = firebaseUser?.uid;

  const params = useParams();
  const pid = params?.projectId.toString();
  console.log(pid);

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
            <Editor project_id={pid} user_id={user_id} />
          </Grid>

          <Grid xs={8}>
            <Graph />
          </Grid>
        </Grid>
      </RequireAuth>
    </>
  );
}
