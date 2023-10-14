import React, { useEffect, useState, useRef } from "react";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { usePathHooks } from "../common/usePathHooks";
import { auth } from "@/lib/firebase/client";
import { Buffer } from "buffer";

import { demodata } from "../obj/data";

export const useSocketHooks = (pathid: string) => {
  const { pid } = usePathHooks(pathid);
  const project_id = pid;

  console.log("socket" + pid);

  const [text, setText] = useState<string>(""); // エディタのテキストを保存する
  const lastSentText = useRef<string>(text); // 前回送信したテキストを保存しておく
  const [socket, setSocket] = useState<WebSocket | null>(null); // WebSocketのインスタンスを保存する

  const [objdata, setObjdata] = useState<any>([]); // オブジェクトのデータを保存する

  const firebaseUser = auth.currentUser;
  const user_id = firebaseUser?.uid;

  const token = {
    project_id: `${project_id}`,
    user_id: `${user_id}`,
    role: "",
    auth_token: "",
  };
  let str_token = JSON.stringify(token).toString();
  let base64 = Buffer.from(str_token).toString("base64");
  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8080/rooms/${base64}`);
    // WebSocketの接続が確立したらログを出力する
    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    // WebSocketの接続が切断したらログを出力する
    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    setSocket(ws);
  }, []);

  useEffect(() => {
    // 200msごとにテキストの変更を送信する
    const interval = setInterval(() => {
      // 前回送信したテキストと同じ場合は送信しない
      if (text !== lastSentText.current) {
        socket?.send(
          JSON.stringify({
            message_types: "Editor",
            message: text,
          })
        );
        // 送信したテキストを保存しておく
        lastSentText.current = text;
      }
    }, 200);

    // コンポーネントがアンマウントされたらクリアする
    return () => clearInterval(interval);
  }, [text, socket]);

  useEffect(() => {
    // Objectのデータを受信する
    socket?.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      if (data.message_types === "move_object") {
        setObjdata(data);
      }
    });
  }, [socket]);
  return { text, setText, objdata, setObjdata };
};

export const objTables = (demodata: any) => {
  const tables = demodata.tables;
  tables.map(
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
};

//relation
export const objRelations = (demodata: any) => {
  const relations = demodata.relations;
  relations.map(
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
};
