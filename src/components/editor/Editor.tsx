import React, { useEffect, useState, useRef } from "react";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const Editor: React.FC = () => {
  const [text, setText] = useState<string>(""); // エディタのテキストを保存する
  const [socket, setSocket] = useState<WebSocket | null>(null); // WebSocketのインスタンスを保存する
  const [cursorData, setCursorData] = useState<{ [key: string]: any }>({}); // 他のユーザーのカーソルの位置を保存する
  const lastSentText = useRef<string>(text); // 前回送信したテキストを保存しておく

  useEffect(() => {
    const ws = new WebSocket("ws://your-websocket-server-url");
    // WebSocketの接続が確立したらログを出力する
    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      switch (data.type) {
        case "textChange":
          setText(data.newText);
          break;
        case "cursorChange":
          setCursorData((prev) => ({
            ...prev,
            [data.userId]: data.position,
          }));
          break;
        default:
          break;
      }
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
            message_types: "messagetype",
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

  const handleCursorChange = (editor: any) => {
    const cursorPosition = editor.getCursorPosition();
    socket?.send(
      JSON.stringify({
        type: "cursorChange",
        userId: "your-unique-user-id", // 一意のユーザーIDをここにセット
        position: cursorPosition,
      })
    );
  };

  return (
    <div>
      <ReactAce
        theme='monokai'
        onChange={setText}
        onCursorChange={(editor) => handleCursorChange(editor)}
        value={text}
        name='UNIQUE_ID_OF_DIV'
        editorProps={{ $blockScrolling: true }}
      />
      {/* ここに他のユーザーのカーソルを表示するコードを追加 */}
    </div>
  );
};

export default Editor;
