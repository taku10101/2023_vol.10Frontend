import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { usePathHooks } from "../common/UsePathHooks";
import { auth } from "@/lib/firebase/client";
import { Buffer } from "buffer";
import { table } from "console";

export const useSocketHooks = (pathid: string) => {
  const { pid } = usePathHooks(pathid);
  const project_id = pid;
  const [text, setText] = useState<string>(""); // エディタのテキストを保存する
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

  const ws = new WebSocket(`ws://localhost:8080/rooms/${base64}`);
  useEffect(() => {
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

  //接続が切れたら再接続する

  useEffect(() => {
    const interval = setInterval(() => {
      const textData = JSON.stringify({
        message_type: "editor",
        message: text,
      });
      socket?.send(textData);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  // Objectのデータを受信する

  ws.addEventListener("message", (event) => {
    try {
      // メッセージデータをJSONオブジェクトにパースします

      const eventData_json = JSON.parse(event.data);
      const postData = eventData_json.message;

      switch (eventData_json.message_type) {
        case "object":
          setObjdata(postData);
          console.log("HooksData " + postData);

          break;
        case "editor":
          // "editor"タイプのメッセージを処理
          console.log("editor");
          break;
        default:
          console.log("Unknown message type:", eventData_json.message_type);
      }
    } catch (e) {
      // エラーハンドリング: パースに失敗した場合など
      console.error("Error handling message:", e);
    }
  });

  // objdata.messes.tablesご取得されていない場合ローディング

  if (!objdata) {
    console.log("loading");
    return { text, setText };
  }
  return { text, setText, objdata, setObjdata };
};
