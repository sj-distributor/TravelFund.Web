import { Button } from "antd";
import { ColumnsType } from "antd/es/table";
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
  const [columns, setColumns] = useState<ColumnsType<SubscribeDataType>>([
    {
      title: "申请名字",
      dataIndex: "subscribeName",
      key: "subscribeName",
    },
    {
      title: "申请类型",
      dataIndex: "subscribeType",
      key: "subscribeType",
    },
    {
      title: "申请日期",
      dataIndex: "subscribeDate",
      key: "subscribeDate",
    },
    {
      title: "操作",
      dataIndex: "function",
      key: "function",
      render: () => <Button>Delete</Button>,
    },
  ]);
  return {
    navigation,
    dataSource,
    columns,
    setNavigation,
  };
};

export default useAction;
