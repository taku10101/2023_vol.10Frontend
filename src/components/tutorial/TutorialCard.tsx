// App.tsx

import React from "react";
import {
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";

export const TutorialCard: React.FC = () => {
  return (
    <Grid width={"80%"} margin={"auto"}>
      <Typography variant='h5'>はじめに</Typography>
      <Typography>
        このアプリケーションは独自言語以下DML
        (DataModelLanguage)を用いて各データベースのスキーマ(DDL)を生成することができます。
      </Typography>
    </Grid>
  );
};
