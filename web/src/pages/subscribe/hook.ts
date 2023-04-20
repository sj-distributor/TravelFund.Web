import { useState } from "react";
import { SubscribeDataType } from "../../dtos/data-list";

const useAction = () => {
  const [navigation, setNavigation] = useState(["我的申请", "申请列表"]);
  const [dataSource, setDataSource] = useState<SubscribeDataType[]>([
    {
      key: "1",
      subscribeName: "胡彦斌",
      subscribeType: "旅游基金",
      subscribeDate: "2023-1-1",
    },
    {
      key: "2",
      subscribeName: "胡彦祖",
      subscribeType: "旅游基金",
      subscribeDate: "2023-1-1",
    },
  ]);

  return {
    navigation,
    dataSource,
    setNavigation,
  };
};

export default useAction;
