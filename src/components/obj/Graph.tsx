import React, { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Connection,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";

import { CustomNode } from "./CustomNode";
import PngButton from "./PngButton";

const initBgColor = "#1A192B";

const connectionLineStyle = { stroke: "#333" };
const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: CustomNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const onChange = (event: { target: { value: any } }) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== "2") {
            return node;
          }

          const color = event.target.value;

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        })
      );
    };

    setNodes([
      {
        id: "1",
        type: "selectorNode", // this is the node type from the type field in the node definition
        data: {
          label: "User",
          columns: [
            { name: "id", type: "int" },
            { name: "to", type: "string" },
          ],
        },
        position: { x: 250, y: 40 },
      },
      {
        id: "2",
        type: "selectorNode",
        data: {
          label: "Like",
          columns: [
            { name: "id", type: "int" },
            { name: "to", type: "string" },
          ],
        },

        position: { x: 400, y: 40 },
      },
    ]);

    setEdges([
      {
        id: "1->2",
        source: "1",
        target: "2",
      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params: Connection | Edge) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      defaultViewport={defaultViewport}
      className='download-image'
    >
      <MiniMap />
      <Controls />
      <PngButton />
    </ReactFlow>
  );
};

export default CustomNodeFlow;
