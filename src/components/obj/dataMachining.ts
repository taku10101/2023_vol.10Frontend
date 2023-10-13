import { table } from "console";
import { data } from "./data";

//dataを分割、reactflowに必要な情報を付加

//table名
const tables = data.tables;

export const objTables = tables.map((table, index) => {
  const row = Math.floor(index / 2); // 行番号を計算
  const col = index % 2; // 列番号を計算
  const objTable = {
    id: table.name.toString(),
    type: "selectorNode",
    data: {
      label: table.name,
      columns: table.columns.map((column) => {
        return {
          name: column.name,
          type: column.type,
          options: column.options,
        };
      }),
    },
    position: {
      x: parseFloat(`${200 * col}`),
      y: parseFloat(`${20 + table.columns.length * 60 * row}`),
    },
  };

  return objTable;
});
console.log(objTables);

const relations = data.relations;

export const objRelations = relations.map((relation, index) => {
  const target = relation.to_col.toString().replace(/^(.*?)\..*$/, "$1");
  const source = relation.from_col.toString().replace(/^(.*?)\..*$/, "$1");

  const objRelation = {
    id: `${source + "=>" + target}`,
    source: source,
    target: target,
    type: "smoothstep",
  };
  return objRelation;
});
