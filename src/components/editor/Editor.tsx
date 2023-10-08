import React, { useEffect, useState } from "react";
import ReactAce from "react-ace/lib/ace";

const Editor: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    const ws = new WebSocket("ws://your-websocket-server-url");

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    // WebSocketのコネクションが閉じたら、コネクションを破棄
    ws.onmessage = (event) => {
      console.log("WebSocket message received:", event);
      console.log("WebSocket message received:", event.data);
      // 他のクライアントからの変更内容を受け取り、表示内容を更新
      setText(event.data);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
      setSocket(null);
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {}, [text]);

  const handleChangeText = (value: string, e?: any) => {
    setText(value);
  };

  console.log(text);

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
