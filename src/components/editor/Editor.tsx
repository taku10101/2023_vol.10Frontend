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
  width: null;
};

const App: React.FC = () => {
  const [showEditor, setShowEditor] = useState(true);

  return (
    <ReactAce
      style={{ backgroundColor: "#929" }}
      placeholder='ggg'
      name='blah2'
      fontSize={14}
      height='calc(100vh - 40px)'
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={"ggg"}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default App;
