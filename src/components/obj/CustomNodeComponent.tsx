import { Box } from "@mui/material";
import React from "react";
import { Handle, Position } from "react-flow-renderer";

const CustomNodeComponent = ({ data }: any) => {
  return (
    <Box
      style={{
        background: "white",
        borderRadius: "5px",
        borderTop: "1px solid black",
        borderLeft: "1px solid black",
        borderRight: "1px solid black",
        paddingBottom: "1px",
      }}
    >
      <div
        style={{
          background: "#376985",
          fontWeight: "bold",
          paddingLeft: "5px",
          borderBottom: "1px solid black",
          textAlign: "left",
        }}
      >
        {data.label}
      </div>
      {data.columns.map((column: any, index: number) => (
        <Box
          key={index}
          sx={{
            borderBottom: "1px solid black",
            display: "flex",
            paddingBottom: "2px",
            px: "15px",
          }}
        >
          <Box
            sx={{
              paddingLeft: "5px",
              textAlign: "left",
            }}
          >
            {column.name}
          </Box>
          <Box
            sx={{
              margin: "auto",
              px: "5px",
            }}
          >
            {""} | {""}
          </Box>

          <Box
            sx={{
              textAlign: "left",
            }}
          >
            {column.type}
          </Box>
        </Box>
      ))}

      <Handle type='source' position={Position.Right} id='table1' />
      <Handle type='source' position={Position.Left} id='table2' />
    </Box>
  );
};

export default CustomNodeComponent;
