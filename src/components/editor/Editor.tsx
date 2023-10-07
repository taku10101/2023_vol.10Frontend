import { Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import ReactAce from "react-ace/lib/ace";

const Editor: React.FC = () => {
  const [text, setText] = useState<string>("");

  useEffect(() => {}, [text]);

  const handleChangeText = (value: string, e?: any) => {
    setText(value);
  };
  console.log(text);

  return (
    <ReactAce
      style={{ paddingLeft: "5px" }}
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
