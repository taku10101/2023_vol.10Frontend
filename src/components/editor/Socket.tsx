import React, { useEffect, useState, useRef } from "react";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { UsePathHooks } from "../../components/common/UsePathHooks";
import { auth } from "@/lib/firebase/client";

export const Sokethoooks = () => {
  //ReferenceError: can't access lexical declaration 'UsePathHooks' before initialization
  const pid = UsePathHooks("");
  const project_id = pid;

  const [text, setText] = useState<string>(""); // エディタのテキストを保存する
  const lastSentText = useRef<string>(text); // 前回送信したテキストを保存しておく
  const [socket, setSocket] = useState<WebSocket | null>(null); // WebSocketのインスタンスを保存する

  const [objdata, setObjdata] = useState<any>([]); // オブジェクトのデータを保存する

  const firebaseUser = auth.currentUser;
  const user_id = firebaseUser?.uid;

  useEffect(() => {
    const ws = new WebSocket(
      `ws://localhost:8080/rooms/${project_id}/${user_id}`
    );
    console.log(`ws://localhost:8080/rooms/${project_id}/${user_id}`);
    // WebSocketの接続が確立したらログを出力する
    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    // WebSocketの接続が切断したらログを出力する
    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
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
