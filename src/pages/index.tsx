import Header from "@/components/common/Header";
import ExportButton from "../components/export/ExportButton";
import Sidebar from "@/components/tutorial/Sidebar";
import { TutorialCard } from "@/components/tutorial/TutorialCard";
import { Grid } from "@mui/material";

import React from "react";

export default function Overview() {
  return (
    <>
      <Header />
      <Grid display={"flex"}>
        <Sidebar />
        <TutorialCard />
        <ExportButton />
      </Grid>
    </>
  );
}
