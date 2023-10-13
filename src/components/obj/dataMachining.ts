import { table } from "console";
import { data } from "./data";

//dataを分割、reactflowに必要な情報を付加

//table名
const tables = data.tables;
//カラム内の情報
const columName = tables.map((table) =>
  table.columns.map((column) => column.name)
);
const ColumType = tables.map((table) =>
  table.columns.map((column) => column.type)
);
const columOptions = tables.map((table) =>
  table.columns?.map((column) => column.options)
);

export const objTables = tables.map((table, table_index) => {
  const objTable = {
    id: table_index.toString(),
    type: "selectorNode",
    data: {
      label: table.name,
      columns: [
        {
          name: columName,
          type: ColumType,
          options: columOptions,
        },
      ],
    },
    position: { x: 0, y: 0 },
  };
  console.log(columOptions);

  return objTable;
});

const relations = data.relations;
const from_col = relations.map((relation) => relation.from_col);
const to_col = relations.map((relation) => relation.to_col);

export const objRelations = relations.map((relation, index) => {
  const objRelation = {
    id: index + tables.length.toString(),
    source: from_col[index],
    target: to_col[index],
  };
  return objRelation;
});
