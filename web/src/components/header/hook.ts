import { routerArray } from "../../router";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/use-auth";

const useAction = () => {
  const [userName, setUserName] = useState<string>("");

  const [clickIndex, setClickIndex] = useState<number>(0);

  const [isClickAccount, setIsClickAccount] = useState<boolean>(false);

  const pathName = useLocation().pathname;

  const { signout } = useAuth();

  useEffect(() => {
    const storageUserName = localStorage.getItem("userName")
      ? (localStorage.getItem("userName") as string)
      : "";

    setUserName(storageUserName);

    let locationIndex: number = 0;
    locationIndex = routerArray.findIndex((e) => pathName.search(e.path) > -1);
    setClickIndex(locationIndex);
  }, [pathName]);

  const clickMenu = (index: number) => {
    setClickIndex(index);
  };

  return {
    userName,
    routerArray,
    clickIndex,
    clickMenu,
    isClickAccount,
    setIsClickAccount,
    signout,
  };
};
export default useAction;
