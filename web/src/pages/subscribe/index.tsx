import { Button } from "antd";
import { ColumnsType } from "antd/es/table";
import { ReactNode, useState } from "react";
import DataList from "../../components/data-list";
import { SubscribeDataType } from "../../dtos/data-list";
import useAction from "./hook";

const Subscribe = () => {
  const { navigation, dataSource } = useAction();
  const myDataTitle: ReactNode = (
    <div className="h-1/5 flex items-center justify-end px-8">新建申请</div>
  );
  const allListTitle: ReactNode = (
    <div className="h-1/5 flex items-center justify-end px-8">新建申请</div>
  );

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
  return (
    <DataList
      navigation={navigation}
      dataSource={dataSource}
      columns={columns}
      myDataTitle={myDataTitle}
      allListTitle={allListTitle}
    />
  );
};
export default Subscribe;
