import { CProjectButton } from "@/components/ project/createProjectButton";
import Header from "@/components/common/Header";
import { PersonalCard } from "@/components/overView/PersonalCard";
import { TeamCard } from "@/components/overView/TeamCard";
import { Typography, Box } from "@mui/material";
import React from "react";

//swr
function OverviewPage() {
  return (
    <>
      <Header />

      <Box sx={{ mt: 4 }}>
        <TeamCard />
        <Box sx={{ py: "20px" }} />
        <PersonalCard />
        <CProjectButton />
      </Box>
    </>
  );
}

export default OverviewPage;
