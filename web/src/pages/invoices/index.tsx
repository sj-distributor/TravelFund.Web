import { ColumnsType } from "antd/es/table";
import { ReactNode, useState } from "react";
import { Button, Image } from "antd";
import DataList from "../../components/data-list";
import { InvoicesDataType } from "../../dtos/data-list";
import useAction from "./hook";

const Invoices = () => {
  const { navigation, dataSource, setImgShow } = useAction();
  const myDataTitle: ReactNode = (
    <div className="h-1/5 flex items-center justify-end px-8">上传发票</div>
  );
  const allListTitle: ReactNode = (
    <div className="h-1/5 flex items-center justify-end px-8">上传发票</div>
  );
  const columns: ColumnsType<InvoicesDataType> = [
    {
      title: "发票",
      dataIndex: "invoice",
      key: "invoice",
      render: (invoice: string[] | [], data, index) => (
        <>
          <Image
            preview={{ visible: false }}
            width={80}
            height={50}
            src={invoice && invoice[0]}
            onClick={() => setImgShow(index)}
          />
          <div style={{ display: "none" }}>
            <Image.PreviewGroup
              preview={{
                visible: data.isShowImg,
                onVisibleChange: (vis) => setImgShow(index, vis),
              }}
            >
              {invoice.map((item: string, index: number) => {
                return <Image key={index} src={item} />;
              })}
            </Image.PreviewGroup>
          </div>
        </>
      ),
    },
    {
      title: "上传日期",
      dataIndex: "uploadDate",
      key: "uploadDate",
    },
    {
      title: "所属类型",
      dataIndex: "invoiceType",
      key: "invoiceType",
    },
    {
      title: "是否有效",
      dataIndex: "isEffective",
      key: "isEffective",
      render: (text) => <span>{text ? "是" : "否"}</span>,
    },
    {
      title: "操作",
      dataIndex: "function",
      key: "function",
      render: () => <Button>Delete</Button>,
    },
  ];
  const [showColumnList, setShowColumnList] =
    useState<ColumnsType<InvoicesDataType>>(columns);

  return (
    <DataList
      navigation={navigation}
      dataSource={dataSource}
      columns={showColumnList}
      myDataTitle={myDataTitle}
      allListTitle={allListTitle}
    />
  );
};

export default Invoices;
