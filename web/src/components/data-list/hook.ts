import { useState } from "react";

const useAction = () => {
  const [clickIndex, setClckIndex] = useState(0);

  return {
    clickIndex,
    setClckIndex,
  };
};

export default useAction;
