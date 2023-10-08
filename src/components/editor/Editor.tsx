import { Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import ReactAce from "react-ace/lib/ace";
import { io } from "socket.io-client";

const Editor: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [socket, setSocket] = useState<any | null>(null);

  useEffect(() => {
    // Socket.ioのインスタンスを初期化
    const ioInstance = io("");
    setSocket(ioInstance);

    // 初期データの取得
    ioInstance.on("initialize", (data: string) => {
      setText(data);
    });

    // 他のクライアントからの更新を受け取る
    ioInstance.on("update", (data: string) => {
      setText(data);
    });

    // コンポーネントのクリーンアップ時にソケット接続を終了
    return () => {
      ioInstance.disconnect();
    };
  }, []);

  const handleChangeText = (value: string, e?: any) => {
    setText(value);
    // テキストの変更をサーバーに送信
    if (socket) {
      socket.emit("edit", value);
    }
  };

  return (
    <ReactAce
      style={{ paddingLeft: "5px", borderRight: "1px solid #ccc" }}
      placeholder='Heare is your code....'
      name='DBEditor'
      fontSize={14}
      height='calc(100vh - 40px)'
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={text}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
      onChange={handleChangeText}
    />
  );
};

export default Editor;
