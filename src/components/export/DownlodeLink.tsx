import { Button } from "@mui/material";
import React from "react";

interface Props {
  data: string;
  fileName: string;
  mimeType: string;
}

const DownlodeLink: React.FC<Props> = ({ data, fileName, mimeType }) => {
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  console.log("url" + url);

  // クリーンアップ関数
  const cleanup = () => {
    URL.revokeObjectURL(url);
  };

  return (
    <Button href={url} download={fileName} onClick={cleanup}>
      Download
    </Button>
  );
};

export default DownlodeLink;
