import React from "react";
import ReactFlow, { addEdge } from "react-flow-renderer";

import CustomNodeComponent from "./CustomNodeComponent";

const initialElements: any = [
  {
    id: "table1",
    type: "customNode",
    position: { x: 100, y: 100 },
    data: {
      label: "Users",
      columns: [
        { name: "id", type: "int", option: "notNull" },
        { name: "name", type: "string" },
      ],
    },
    sourcePosition: "right",
    targetPosition: "left",
    source: "table2",
    target: "table1",
  },
  {
    id: "table2",
    type: "customNode",
    position: { x: 400, y: 100 },
    data: {
      label: "Like",
      columns: [
        { name: "id", type: "int" },
        { name: "to", type: "string" },
      ],
    },
    sourcePosition: "right",
    targetPosition: "left",
    source: "table1",
    target: "table2",
  },
];

const CustomFlowComponent = () => {
  const [elements, setElements] = React.useState(initialElements);

  const onConnect = (params: any) =>
    setElements((els: any) => addEdge(params, els));

  return (
    <ReactFlow
      nodes={elements}
      onConnect={onConnect}
      nodeTypes={{ customNode: CustomNodeComponent }}
    />
  );
};

export default CustomFlowComponent;
