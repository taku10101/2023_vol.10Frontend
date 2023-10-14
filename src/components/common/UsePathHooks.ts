import { useState, useEffect } from "react";

export const UsePathHooks = (pathid: string) => {
  //TypeError: Cannot read properties of null (reading 'useState')

  const [pid, setPid] = useState("");

  useEffect(() => {}, [pathid]);

  return { pid, setPid };
};
