import React, { useRef, useEffect } from "react";
import MonacoEditor from "react-monaco-editor";
import * as monaco from "monaco-editor";

interface MonacoEditorProps {
  value?: string;
  language?: string;
  onChange?: (value: string) => void;
}

const MyMonacoEditor: React.FC<MonacoEditorProps> = ({
  value,
  language = "javascript",
  onChange,
}) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.layout();
    }
  }, []);

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <MonacoEditor
      width='800'
      height='400'
      language={language}
      theme='vs-dark'
      value={value}
      onChange={handleEditorChange}
      editorDidMount={handleEditorDidMount}
      options={{
        selectOnLineNumbers: true,
      }}
    />
  );
};

export default MyMonacoEditor;
