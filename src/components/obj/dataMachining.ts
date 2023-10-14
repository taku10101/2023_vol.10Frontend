import { table } from "console";

import { Sokethoooks } from "../editor/Socket";

const { text, setText, objdata, setObjdata } = Sokethoooks();
//table名

const tables = objdata.tables;

export const objTables = tables.map(
  (table: { name: { toString: () => any }; columns: any[] }, index: number) => {
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
console.log(objTables);

const relations = objdata.relations;

export const objRelations = relations.map(
  (
    relation: {
      to_col: { toString: () => string };
      from_col: { toString: () => string };
    },
    index: any
  ) => {
    const target = relation.to_col.toString().replace(/^(.*?)\..*$/, "$1");
    const source = relation.from_col.toString().replace(/^(.*?)\..*$/, "$1");

    const objRelation = {
      id: `${source + "=>" + target}`,
      source: source,
      target: target,
      type: "smoothstep",
    };
    return objRelation;
  }
);
