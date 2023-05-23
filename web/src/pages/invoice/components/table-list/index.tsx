import Table, { ColumnsType } from "antd/es/table";

import { Image, Popconfirm, Tag } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import moment from "moment";

import { AuditStatusType } from "../../../../services/dtos/apply-reimbursement";

import {
  TravelInvoiceType,
  PurchasingType,
  TableListProps,
  TravelInvoices,
} from "../../../../services/dtos/invoice";

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
      title: "用户ID",
      dataIndex: "userId",
      align: "center",
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
        return (
          <div>
            {text === TravelInvoiceType.TourismFund
              ? "旅游基金"
              : text === TravelInvoiceType.TravelExpenses
              ? "差旅费用"
              : text === TravelInvoiceType.PhysicalExamination && "体检费用"}
          </div>
        );
      },
    },
    {
      title: "发票类型",
      dataIndex: "purchasingType",
      align: "center",
      width: 150,
      render: (text) => {
        return (
          <div>
            {text === PurchasingType.General
              ? "通用"
              : text === PurchasingType.Traffic
              ? "交通出行"
              : text === PurchasingType.Dining
              ? "餐饮"
              : text === PurchasingType.Ticket && "门票"}
          </div>
        );
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
      render: (text) => {
        return (
          <div className="flex justify-center items-center">
            {(() => {
              switch (text) {
                case AuditStatusType.Pending:
                  return (
                    <Tag icon={<ClockCircleOutlined />} color="default">
                      待审核中
                    </Tag>
                  );
                case AuditStatusType.Approved:
                  return (
                    <Tag icon={<CheckCircleOutlined />} color="success">
                      审核通过
                    </Tag>
                  );
                case AuditStatusType.Rejected:
                  return (
                    <Tag icon={<CloseCircleOutlined />} color="error">
                      审核不通过
                    </Tag>
                  );
                case AuditStatusType.Inprogress:
                  return (
                    <Tag icon={<SyncOutlined spin />} color="processing">
                      审核中
                    </Tag>
                  );
                default:
                  return null;
              }
            })()}
          </div>
        );
      },
    },
    {
      title: "人工审核状态",
      dataIndex: "manualStatus",
      key: "manualStatus",
      align: "center",
      width: 150,
      render: (text) => {
        return (
          <div className="flex justify-center items-center">
            {(() => {
              switch (text) {
                case AuditStatusType.Pending:
                  return (
                    <Tag icon={<ClockCircleOutlined />} color="default">
                      待审核中
                    </Tag>
                  );
                case AuditStatusType.Approved:
                  return (
                    <Tag icon={<CheckCircleOutlined />} color="success">
                      审核通过
                    </Tag>
                  );
                case AuditStatusType.Rejected:
                  return (
                    <Tag icon={<CloseCircleOutlined />} color="error">
                      审核不通过
                    </Tag>
                  );
                case AuditStatusType.Inprogress:
                  return (
                    <Tag icon={<SyncOutlined spin />} color="processing">
                      审核中
                    </Tag>
                  );
                default:
                  return null;
              }
            })()}
          </div>
        );
      },
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
