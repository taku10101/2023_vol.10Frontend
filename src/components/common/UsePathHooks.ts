import { useState, useEffect } from "react";

export const usePathHooks = (pathid: any) => {
  //TypeError: Cannot read properties of null (reading 'useState')

  const [pid, setPid] = useState(pathid);
  useEffect(() => {
    setPid(pathid);
  }, [pathid]);

  return { pid };
};
