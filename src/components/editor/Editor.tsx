import { Box } from "@mui/material";
import React, { useState } from "react";

import ReactAce from "react-ace/lib/ace";

type EditorProps = {
  showEditor: boolean;
  setShowEditor: (showEditor: boolean) => void;
  placeholder?: string;
  theme?: string;
  name?: string;
  fontSize?: number;
  showPrintMargin?: boolean;
  showGutter?: boolean;
  highlightActiveLine?: boolean;

  mode?: string;
  wrapEnabled?: boolean;
  value?: string;
  width?: null;
};

const App: React.FC = () => {
  const [showEditor, setShowEditor] = useState(true);

  return (
    <Box
      sx={{
        width: "402px",
        height: "100%",
        display: "flex",
        borderRight: "1px solid #000",
        flexDirection: "column",
      }}
    >
      <ReactAce
        placeholder="ggg"
        theme="monokai"
        name="blah2"
        width={"400px"}
        height="100vh"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`function onLoad(editor) {
    console.log("i've loaded");
  ergre
  }`}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </Box>
  );
};

export default App;
