import React from "react";

import ListItemIcon from "@mui/material/ListItemIcon";
import {
  Grid,
  ListItem,
  List,
  ListItemText,
  CardMedia,
  Typography,
} from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

export default function NestedList() {
  const data = [
    {
      title: "はじめに",
      icon: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    },
    {
      title: "言語仕様",
      icon: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    },
    {
      title: "チュートリアル",
      icon: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    },
    {
      title: "FAQs",
      icon: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    },
  ];
  return (
    <List>
      {data.map((item, index) => (
        <ListItem key={index} button>
          <CheckOutlinedIcon
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
          <ListItemIcon>
            <Typography
              sx={{
                fontSize: "16px",
                width: "150px",
                marginLeft: "10px",
              }}
            >
              {item.title}
            </Typography>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}
