import { Grid, Typography } from "@mui/material";
import React from "react";

export const OblLabelUi = () => {
  const data = [
    {
      name: "table",
      columns: [
        {
          name: "colName",
          options: ["primary", "notnull"],
        },
      ],
    },
    {
      name: "table2",
      columns: [
        {
          name: "colName2",
          options: ["primary", "notnull"],
        },
      ],
    },
  ];
  return (
    <>
      <Grid>
        {/* tablename */}
        <Typography variant='h6'>TableName</Typography>
        {/* column  mapで回す*/}
        {data.map((col) => (
          <Grid key={col.name}>
            <Typography variant='h6'>{col.name}</Typography>
            {col.columns.map((column) => (
              <Typography key={column.name}>
                {column.name}
                {column.options.map((option) => (
                  <Typography key={option}>{option}</Typography>
                ))}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </>
  );
};
