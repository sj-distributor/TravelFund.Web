import { Button } from "antd";
import { useState } from "react";
import { Image } from "antd";
import { InvoicesDataType } from "../../dtos/data-list";
import { ColumnsType } from "antd/es/table";
const useAction = () => {
  const [navigation, setNavigation] = useState(["上传发票", "发票列表"]);
  const [dataSource, setDataSource] = useState<InvoicesDataType[]>([
    {
      key: "1",
      uploadDate: "2023-1-12",
      invoice: [
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      ],
      invoiceType: "旅游基金-餐费",
      isEffective: true,
      isShowImg: false,
    },
    {
      key: "2",
      uploadDate: "2023-1-12",
      invoiceType: "旅游基金-住宿",
      isEffective: false,
      isShowImg: false,
    },
    {
      key: "3",
      uploadDate: "2023-1-12",
      invoiceType: "旅游基金-出行",
      isEffective: true,
      isShowImg: false,
    },
    {
      key: "4",
      uploadDate: "2023-1-12",
      invoiceType: "体检费用",
      isEffective: true,
      isShowImg: false,
    },
    {
      key: "5",
      uploadDate: "2023-1-12",
      invoiceType: "差旅费用",
      isEffective: true,
      isShowImg: false,
    },
  ]);

  const setDataSources = () => {};

  const [columns, setColumns] = useState<ColumnsType<InvoicesDataType>>([
    {
      title: "发票",
      dataIndex: "invoice",
      key: "invoice",
      render: (invoice) => (
        <>
          {console.log(invoice)}
          <Image
            preview={{ visible: false }}
            width={80}
            src={invoice && invoice[0]}
          />
          <div style={{ display: "none" }}>
            <Image.PreviewGroup>
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
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
  ]);
  return {
    navigation,
    dataSource,
    columns,
    setNavigation,
  };
};

export default useAction;
