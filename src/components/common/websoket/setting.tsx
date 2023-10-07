// pages/_app.tsx
import React, { useEffect, useState } from "react";

interface AppProps {
  Component: React.FC;
  pageProps: any;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [ws, setWs] = useState<WebSocket | null>(null); // WebSocketのコネクションを保持
  const [text, setText] = useState<string>(""); // 表示内容
  useEffect(() => {
    // WebSocketのコネクションを開く
    const websocket = new WebSocket("ws://your-websocket-server.com");

    // WebSocketのコネクションが開いたら、コネクションを保持
    websocket.onopen = () => {
      console.log("WebSocket connected");
    };
    // WebSocketのコネクションが閉じたら、コネクションを破棄
    websocket.onmessage = (event) => {
      // 他のクライアントからの変更内容を受け取り、表示内容を更新
      setText(event.data);
    };

    setWs(websocket);

    return () => {
      if (websocket) {
        websocket.close();
      }
    };
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setText(newValue);
  };

  return (
    <Component {...pageProps} text={text} handleTextChange={handleTextChange} />
  );
};

export default App;
