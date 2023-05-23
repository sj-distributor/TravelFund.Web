import Table, { ColumnsType } from "antd/es/table";
import { Tag } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";

import { TravelApplicationResponses } from "../../../../services/dtos/travel-application";
import { AuditStatusType } from "../../../../services/dtos/apply-reimbursement";

import moment from "moment";

const TableList = ({
  applicateList,
  tableLoading,
}: {
  applicateList?: TravelApplicationResponses[];
  tableLoading: boolean;
}) => {
  const columnsTodoList: ColumnsType<TravelApplicationResponses> = [
    {
      title: "申请表单ID",
      dataIndex: "id",
      align: "center",
      width: 170,
      fixed: "left",
    },
    {
      title: "用户ID",
      dataIndex: "userId",
      align: "center",
      width: 120,
    },
    {
      title: "报销额度",
      dataIndex: "customPrice",
      align: "center",
      width: 170,
    },
    {
      title: "发票额度",
      dataIndex: "invoicePrice",
      align: "center",
      width: 170,
    },
    {
      title: "实报额度",
      dataIndex: "actualPrice",
      align: "center",
      width: 170,
    },
    {
      title: "是否组团",
      dataIndex: "isGroup",
      align: "center",
      width: 120,
      render: (text) => {
        return <div>{text ? "是" : "否"}</div>;
      },
    },
    {
      title: "出行日期",
      dataIndex: "travelDate",
      align: "center",
      width: 200,
      render: (text) => {
        return <div>{moment(text).format("YYYY-MM-DD")}</div>;
      },
    },

    {
      title: "回程日期",
      dataIndex: "returnDate",
      align: "center",
      width: 200,
      render: (text) => {
        return <div>{moment(text).format("YYYY-MM-DD")}</div>;
      },
    },
    {
      title: "进度",
      dataIndex: "status",
      align: "center",
      width: 200,
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
  ];
  return (
    <Table
      className="mt-3 mx-3"
      columns={columnsTodoList}
      dataSource={applicateList}
      pagination={false}
      rowKey={(record) => record.id}
      loading={tableLoading}
      scroll={{ x: 1000, y: 560 }}
    />
  );
};

export default TableList;
