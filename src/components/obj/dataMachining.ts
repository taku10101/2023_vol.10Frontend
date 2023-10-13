import { table } from "console";
import { data } from "./data";

//dataを分割、reactflowに必要な情報を付加

//table名
const tables = data.tables;

export const objTables = tables.map((table, index) => {
  const objTable = {
    id: table.name.toString(),
    type: "selectorNode",
    data: {
      label: table.name,
      columns: table.columns,
    },
    position: { x: `${index * 200}`, y: `${index * 250}` },
  };

  return objTable;
});
console.log(objTables);

const relations = data.relations;
// const from_col = relations.map((relation) => relation.from_col);
// const to_col = relations.map((relation) => relation.to_col);

export const objRelations = relations.map((relation, index) => {
  const target = relation.to_col.toString().replace(/^(.*?)\..*$/, "$1");
  const source = relation.from_col.toString().replace(/^(.*?)\..*$/, "$1");

  const objRelation = {
    id: tables.toString(),
    //^.*?(?=\.)
    source: source,
    target: target,
    type: "smoothstep",
  };
  return objRelation;
});
