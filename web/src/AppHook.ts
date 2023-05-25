import { useState, useEffect, useContext } from "react";
import { InitialAppSetting } from "./appsettings";
import { AuthContext } from "./hooks/providers/auth-provider";

const useAction = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useContext(AuthContext);

  useEffect(() => {
    InitialAppSetting().then(() => setIsLoaded(true));
  }, []);
  return { isLoaded };
};

export default useAction;
