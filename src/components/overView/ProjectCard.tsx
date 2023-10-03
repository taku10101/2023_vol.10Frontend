import { CardContent, CardMedia, Card, Grid, Typography } from "@mui/material";
import React from "react";

export const ProjectCard = () => {
  return (
    <Grid container spacing={3} style={{ padding: "20px" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index, detail) => (
        <Grid item xs={3} key={index}>
          <Card style={{ borderRadius: "15px", backgroundColor: "white" }}>
            {/* Image for the card */}
            <CardMedia
              component="img"
              height="150"
              image="https://source.unsplash.com/random"
              alt={`Card Image ${item}`}
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Card Title {item}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                detail:{item}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
