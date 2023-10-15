import { CardContent, CardMedia, Grid, Typography, Paper } from "@mui/material";
import React from "react";

export const TeamCard = () => {
  return (
    <>
      <Typography variant='h3' sx={{ ml: 2 }}>
        Team
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          padding: "20px",
        }}
      >
        {[1, 2, 3, 4].map((item, index, detail) => (
          <Grid item xs={3} key={index}>
            <Paper
              elevation={5}
              style={{ borderRadius: "8px", backgroundColor: "white" }}
            >
              <CardMedia
                component='img'
                height='150'
                src='./00.png'
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
    </>
  );
};
