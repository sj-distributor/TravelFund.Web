import Table, { ColumnsType } from "antd/es/table";

import { Image, Popconfirm } from "antd";

import moment from "moment";

import {
  TravelInvoiceType,
  PurchasingType,
  TableListProps,
  TravelInvoices,
} from "../../../../services/dtos/invoice";

import StatusTags from "../../../../components/status-tags";

const TableList = ({
  handleDeleteInvoice,
  invoiceList,
  tableLoading,
}: TableListProps) => {
  const columnsTodoList: ColumnsType<TravelInvoices> = [
    {
      title: "发票ID",
      dataIndex: "id",
      align: "center",
      fixed: "left",
      width: 120,
    },
    {
      title: "发票",
      dataIndex: "fileUrl",
      align: "center",
      width: 150,
      render: (record) => {
        return (
          <div className="flex justify-center items-center">
            {record === "" ? (
              <Image
                height={58}
                width={120}
                src="error"
                fallback="error"
                alt="图片加载错误..."
              />
            ) : (
              <Image height={58} width={120} src={record} alt="" />
            )}
          </div>
        );
      },
    },
    {
      title: "上传日期",
      dataIndex: "createdDate",
      align: "center",
      width: 150,
      render: (text) => {
        return <div>{moment(text).format("YYYY-MM-DD")}</div>;
      },
    },
    {
      title: "报销类型",
      dataIndex: "type",
      align: "center",
      width: 200,
      render: (text) => {
        switch (text) {
          case TravelInvoiceType.TourismFund:
            return "旅游基金";
          case TravelInvoiceType.TravelExpenses:
            return "差旅费用";
          case TravelInvoiceType.PhysicalExamination:
            return "体检费用";
        }
      },
    },
    {
      title: "发票类型",
      dataIndex: "purchasingType",
      align: "center",
      width: 150,
      render: (text) => {
        switch (text) {
          case PurchasingType.General:
            return "通用";
          case PurchasingType.Traffic:
            return "交通出行";
          case PurchasingType.Dining:
            return "餐饮";
          case PurchasingType.Ticket:
            return "门票";
        }
      },
    },
    {
      title: "发票价税合计",
      dataIndex: "invoicePrice",
      align: "center",
      width: 120,
    },
    {
      title: "AI审核状态",
      dataIndex: "aiStatus",
      align: "center",
      width: 150,
      render: (statusType) => StatusTags(statusType),
    },
    {
      title: "操作",
      dataIndex: "",
      align: "center",
      fixed: "right",
      width: 200,
      render: (record) => {
        return (
          <div className="flex justify-center items-center">
            <Popconfirm
              title="删除发票"
              description={() => `确定删除发票ID为${record.id}的发票吗?`}
              onConfirm={() => {
                handleDeleteInvoice(record);
              }}
              okText="删除"
              cancelText="取消"
            >
              <div className="flex justify-center items-center cursor-pointer border border-gray-200 w-20 h-8 bg-red-700 text-white font-medium hover:bg-red-800 hover:font-semibold rounded-[0.5rem]">
                <div>删除</div>
              </div>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <Table
      className="mt-3 mx-3"
      columns={columnsTodoList}
      dataSource={invoiceList}
      pagination={false}
      rowKey={(record) => record.id}
      loading={tableLoading}
      scroll={{ x: 1300, y: 560 }}
    />
  );
};
export default TableList;
