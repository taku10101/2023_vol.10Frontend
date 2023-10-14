import React from "react";
import ReactAce from "react-ace/lib/ace";
import { text } from "stream/consumers";
import { useSocketHooks } from "./useSocketHooks";
import path from "path";
import { type } from "os";

type Props = {
  pathid: any;
};

const Editor = (props: Props) => {
  const { pathid } = props;
  const { text, setText } = useSocketHooks(pathid);
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
