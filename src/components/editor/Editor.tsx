import React from "react";
import ReactAce from "react-ace/lib/ace";
import { text } from "stream/consumers";
import { Sokethoooks } from "./Socket";

const Editor = () => {
  const { text, setText } = Sokethoooks();
  return (
    <ReactAce
      theme='monokai'
      onChange={setText}
      value={text}
      name='UNIQUE_ID_OF_DIV'
      editorProps={{ $blockScrolling: true }}
      height=' calc(100vh - 40px)'
    />
  );
};

export default Editor;
