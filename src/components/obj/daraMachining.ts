import { table } from "console";
import { data } from "./data";

//dataを分割、reactflowに必要な情報を付加
export const dataMachining = () => {
  //table名
  const tables = data.tables;
  //カラム名
  const columns = tables.map((table) => table.columns);
  //カラム内の情報
  const columName = tables.map((table) =>
    table.columns.map((column) => column.name)
  );
  const ColumType = tables.map((table) =>
    table.columns.map((column) => column.type)
  );
  const columOptions = tables.map((table) =>
    table.columns.map((column) => column.options)
  );

  const objTables = tables.map((table, index) => {
    const objTable = {
      id: index,
      type: "selectorNode",
      data: {
        label: table.name,
        columns: [
          {
            name: columName[index],
            type: ColumType[index],
            options: columOptions[index],
          },
          { name: "to", type: "string" },
        ],
      },
      position: { x: 0, y: 0 },
    };
    return objTable;
  });

  const relations = data.relations;
  const from_col = relations.map((relation) => relation.from_col);
  const to_col = relations.map((relation) => relation.to_col);
  const objRelations = relations.map((relation, index) => {
    const objRelation = {
      id: index + tables.length,
      source: from_col[index],
      target: to_col[index],
      type: "smoothstep",
      animated: true,
      style: { stroke: "red" },
    };
    return objRelation;
  });
};
