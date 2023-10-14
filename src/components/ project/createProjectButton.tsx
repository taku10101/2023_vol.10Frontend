import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { createProject } from "../api/project";
import { useRouter } from "next/router";

export const CProjectButton = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  const handleCreateProject = async () => {
    const newProject = await createProject();
    if (newProject) {
      setData(newProject);
      router.push(`/projects/${newProject.project_id}`);
      console.log(newProject.project_id);
    }
  };
  return (
    <Button variant='outlined' onClick={handleCreateProject}>
      Create Project
    </Button>
  );
};
