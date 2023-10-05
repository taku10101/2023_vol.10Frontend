import {
  CardContent,
  CardMedia,
  Card,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import React from "react";

export const ProjectCard = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "20px",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index, detail) => (
        <Grid item xs={3} key={index}>
          <Paper
            elevation={5}
            style={{ borderRadius: "8px", backgroundColor: "white" }}
          >
            {/* Image for the card */}
            <CardMedia
              component='img'
              height='150'
              image='https://source.unsplash.com/random'
              alt={`Card Image ${item}`}
              style={{
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Card Title {item}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                detail:{item}
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
