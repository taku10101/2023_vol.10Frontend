import { Box } from "@mui/material";
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

export function CustomNode({ data, isConnectable }: any) {
  return (
    <>
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
                key={column.name}
              >
                <Handle
                  type='target'
                  position={Position.Left}
                  onConnect={(params) =>
                    console.log("handle onConnect", params)
                  }
                  isConnectable={isConnectable}
                />
                <Handle
                  type='source'
                  position={Position.Right}
                  onConnect={(params) =>
                    console.log("handle onConnect", params)
                  }
                  isConnectable={isConnectable}
                />

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
    </>
  );
}
