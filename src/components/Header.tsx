import React from "react";
import { Box, InputBase, IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <Box
      sx={{ position: "sticky", height: "40px", top: 0 }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
      bgcolor="#123456"
    >
      {/* Left: Logo and Text */}
      <Box display="flex" alignItems="center" gap={2}>
        <img src="/path/to/your/logo.png" alt="Logo" width={50} />
        <span style={{ color: "white", fontWeight: "bold" }}>
          Your Text Here
        </span>
      </Box>

      {/* Right: Icons and Content */}
      <Box display="flex" alignItems="center" gap={2}>
        <IconButton aria-label="notifications">
          <Avatar
            src="https://avatars.githubusercontent.com/u/58823014?v=4"
            alt="Profile"
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
        {/* Add other icons or content as needed */}
      </Box>
    </Box>
  );
};

export default Header;
