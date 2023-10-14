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

import { objRelations, objTables } from "./dataMachining";

const connectionLineStyle = { stroke: "#999" }; //

const nodeTypes = {
  selectorNode: CustomNode,
};

const defaultViewport = { x: 65, y: 0, zoom: 1 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes(objTables);
    setEdges(objRelations);
  }, [setNodes, setEdges]);

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
      defaultViewport={defaultViewport}
      zoomOnScroll={true}
      zoomOnDoubleClick={true}
      className='download-image'
    >
      <MiniMap />
      <Controls />
      <PngButton />
    </ReactFlow>
  );
};

export default CustomNodeFlow;
