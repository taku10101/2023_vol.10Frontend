import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { usePathHooks } from "../common/UsePathHooks";
import { auth } from "@/lib/firebase/client";
import { Buffer } from "buffer";

export const useSocketHooks = (pathid: string) => {
  const { pid } = usePathHooks(pathid);
  const project_id = pid;

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

  useEffect(() => {
    // 200msごとにテキストの変更を送信する
    const interval = setInterval(() => {
      // 前回送信したテキストと同じ場合は送信しない
      if (text !== lastSentText.current) {
        socket?.send(
          JSON.stringify({
            message_type: "editor",
            message: text,
          })
        );

        // 送信したテキストを保存しておく
        lastSentText.current = text;
      }
    }, 5000);
  }, [text]);

  // Objectのデータを受信する

  ws.addEventListener("message", (event) => {
    const edata = JSON.parse(event.data);

    switch (edata.message_type) {
      case "object":
        setObjdata(edata.message);

        break;
      case "move_object":
        console.log("move_object");
        break;
      case "move_pointer":
        console.log("move_pointer");
        break;
      default:
        //errorハンドリング
        break;
    }
  });

  return { text, setText, objdata, setObjdata };
};
