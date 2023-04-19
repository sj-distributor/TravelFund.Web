import { useState } from "react";

const useAction = () => {
  const [fromData, setFromData] = useState([
    {
      title: "申请人",
      vlaue: "",
    },
    {
      title: "出游日期",
      vlaue: "",
    },
    {
      title: "是否组团",
      vlaue: "",
    },
    {
      title: "回程日期",
      vlaue: "",
    },
  ]);
  return { fromData };
};

export default useAction;
