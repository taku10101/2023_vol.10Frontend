import React from "react";
import {
  Panel,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from "reactflow";
import { toPng } from "html-to-image";
import { Button, Typography } from "@mui/material";

function downloadImage(dataUrl: string) {
  const a = document.createElement("a");

  a.setAttribute("download", "reactflow.png");
  a.setAttribute("href", dataUrl);
  a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

function PngButton() {
  const { getNodes } = useReactFlow();
  const onClick = () => {
    // we calculate a transform for the nodes so that all nodes are visible
    // we then overwrite the transform of the `.react-flow__viewport` element
    // with the style option of the html-to-image library
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );

    const viewport: any = document.querySelector(".react-flow__viewport");
    if (viewport) {
      toPng(viewport, {
        backgroundColor: "#fff",
        width: imageWidth,
        height: imageHeight,
        style: {
          width: `${imageWidth}`,
          height: `${imageHeight}`,
          transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
        },
      }).then(downloadImage);
    }
  };

  return (
    <>
      <Panel position={"top-right"}>
        <Button
          className='download-btn'
          onClick={onClick}
          sx={{
            width: "100px",
          }}
          variant='outlined'
        >
          <Typography sx={{ fontSize: "10px" }}>Export png</Typography>
        </Button>
      </Panel>
    </>
  );
}

export default PngButton;
