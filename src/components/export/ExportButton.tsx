import React from "react";
import DownloadLink from "./DownlodeLink";
import { Button } from "@mui/material";

const ExportButton: React.FC = () => {
  const fileData: any = {
    project_id: "1",
    project_title: "test",
    data: "Hello, Blob!",
  };

  const data = fileData.data;
  const fileName = `${fileData.project_title}.sql`;
  const mimeType = "text/plain";

  return (
    <Button>
      <DownloadLink data={data} fileName={fileName} mimeType={mimeType} />
    </Button>
  );
};

export default ExportButton;
