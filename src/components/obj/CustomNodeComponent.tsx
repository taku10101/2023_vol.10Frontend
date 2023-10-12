import { Box } from "@mui/material";
import React from "react";
import { Handle, Position } from "react-flow-renderer";

const CustomNodeComponent = ({ data, isConnectable }: any) => {
  return (
    <>
      <Handle
        type='target'
        position={Position.Top}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
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
        <Box
          sx={{
            background: "#376985",
            fontWeight: "bold",
            paddingLeft: "5px",
            borderBottom: "1px solid black",
            textAlign: "left",
          }}
        >
          {data.label}
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          {data.columns.map((column: any, index: number) => (
            <Box
              key={index}
              sx={{
                borderBottom: "1px solid black",
                display: "flex",
                paddingBottom: "2px",
                px: "15px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  textAlign: "left",
                }}
              >
                {column.name}
              </Box>
              <Box
                sx={{
                  px: "15px",
                }}
              >
                {" "}
              </Box>
              <Box
                sx={{
                  textAlign: "right",
                  justifyContent: "space-between",
                }}
              >
                {column.type}
                <Box
                  sx={{
                    textAlign: "right",
                  }}
                >
                  {column.option &&
                    column.option.map((option: any, index: number) => (
                      <Box key={index}>{option}</Box>
                    ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Handle
        type='source'
        position={Position.Bottom}
        id='a'
        style={{ background: "#555" }}
      />
    </>
  );
};

export default CustomNodeComponent;
