import { Box } from "@mui/material";
import React from "react";
import ReactFlow, { Background, MarkerType } from "reactflow";

import "reactflow/dist/style.css";

const defaultNodes = [
  {
    id: "A",
    position: { x: 20, y: 20 },
    data: { label: "A" },
  },
  {
    id: "B",
    position: { x: 100, y: 200 },
    data: { label: "B" },
  },
  {
    id: "C",
    position: { x: 300, y: 20 },
    data: { label: "C" },
  },
  {
    id: "D",
    position: { x: 300, y: 170 },
    data: { label: "D" },
  },
  {
    id: "E",
    position: { x: 250, y: 300 },
    data: { label: "E" },
  },
];

const defaultEdges = [
  {
    id: "A->B",
    source: "A",
    target: "B",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  //1対多
  {
    id: "C->D",
    source: "C",
    target: "D",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  //多対多
  {
    id: "D->E",
    source: "D",
    target: "E",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    markerStart: {
      type: MarkerType.ArrowClosed,
      orient: "auto-start-reverse",
    },
  },
];

export default function MarkersExample() {
  return (
    <ReactFlow
      style={{
        height: "100hv",
      }}
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
    >
      <Background />
    </ReactFlow>
  );
}
