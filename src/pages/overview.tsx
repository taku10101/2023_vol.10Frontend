import Header from "@/components/Header";
import { ProjectCard } from "../components/overView/ProjectCard";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import React from "react";

//swr
function OverviewPage() {
  return (
    <>
      <Header />
      <Box>
        <Box style={{ padding: "20px" }}>
          <Typography variant="h3" gutterBottom>
            OverView
          </Typography>
        </Box>
        <ProjectCard />
      </Box>
    </>
  );
}

export default OverviewPage;
