import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { getUser } from "../api/user";
import LogoutButton from "../auth/LogoutButton";
import LoginButton from "../auth/LoginButton";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null); // ユーザー情報を保持するstate
  const [loading, setLoading] = useState(true); // ローディング状態を保持するstate

  const currentPage = router.pathname.replace(/\//g, "");

  useEffect(() => {
    // 非同期処理を行う関数を定義
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUser(); // getUserを呼び出してuserを取得
        setUser(fetchedUser); // 取得したuserをstateにセット
      } catch (error) {
        console.error("Failed to fetch user:", error); // エラーログを出力
      } finally {
        setLoading(false); // ローディング状態をfalseにセット
      }
    };

    fetchUser();
  }, []);

  return (
    <Box
      sx={{ position: "sticky", height: "40px", top: 0 }}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      padding={2}
      bgcolor='#123456'
    >
      {/* Left: Logo and Text */}
      <Box display='flex' alignItems='center' gap={2}>
        <img src='/path/to/your/logo.png' alt='Logo' width={50} />
        <span style={{ color: "white", fontWeight: "bold" }}>
          {currentPage}
        </span>
      </Box>

      {/* Right: Icons and Content */}
      <Box display='flex' alignItems='center' gap={2}>
        {loading ? (
          <p>Loading...</p> // ローディング中はローディングメッセージを表示
        ) : user ? (
          <IconButton aria-label='notifications'>
            <LogoutButton />
          </IconButton>
        ) : (
          <IconButton>
            <LoginButton />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Header;
