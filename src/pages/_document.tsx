import { Html, Head, Main, NextScript } from "next/document";
import { auth } from "../lib/firebase/client";
import React, { createContext, useEffect } from "react";
export default function Document() {
  return (
    <Html lang='ja'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
