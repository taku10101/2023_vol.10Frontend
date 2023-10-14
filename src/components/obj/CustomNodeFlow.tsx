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

import { useSocketHooks } from "../editor/useSocketHooks";

const connectionLineStyle = { stroke: "#999" };
const nodeTypes = {
  selectorNode: CustomNode,
};

const defaultViewport = { x: 65, y: 0, zoom: 1 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const { objdata, setObjdata } = useSocketHooks("");

  const objTables = (objdata: any) => {
    console.log(objdata);

    const tables = objdata.tables;
    const result = tables?.map(
      (
        table: { name: { toString: () => any }; columns: any[] },
        index: number
      ) => {
        const row = Math.floor(index / 2); // 行番号を計算
        const col = index % 2; // 列番号を計算
        const objTable = {
          id: table.name.toString(),
          type: "selectorNode",
          data: {
            label: table.name,
            columns: table.columns.map(
              (column: { name: any; type: any; options: any }) => {
                return {
                  name: column.name,
                  type: column.type,
                  options: column.options,
                };
              }
            ),
          },
          position: {
            x: parseFloat(`${200 * col}`),
            y: parseFloat(`${20 + table.columns.length * 60 * row}`),
          },
        };

        return objTable;
      }
    );
    return result;
  };

  const objRelations = (objdata: any) => {
    const relations = objdata.relations;
    const result = relations?.map(
      (
        relation: {
          to_col: { toString: () => string };
          from_col: { toString: () => string };
        },
        index: any
      ) => {
        const target = relation.to_col.toString().replace(/^(.*?)\..*$/, "$1");
        const source = relation.from_col
          .toString()
          .replace(/^(.*?)\..*$/, "$1");

        const objRelation: any = {
          id: `${source + "=>" + target}`,
          source: source,
          target: target,
          type: "smoothstep",
        };
        return objRelation;
      }
    );
    return result;
  };

  useEffect(() => {
    if (!objdata) return;
    const objTablesData = objTables(objdata);
    const objRelationsData = objRelations(objdata);
    setNodes(objTablesData);
    setEdges(objRelationsData);
  }, [objdata]);

  const onConnect = useCallback(
    (params: Connection | Edge) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#eee" } }, eds)
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
