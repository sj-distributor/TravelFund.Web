import Table, { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import {
  AuditStatusType,
  TravelExpenseFormDto,
  TravelExpenseFormType,
} from "../../../../services/dtos/apply-reimbursement";

const TableList = ({
  applyReimbursement,
  tableLoading,
}: {
  applyReimbursement: TravelExpenseFormDto[];
  tableLoading: boolean;
}) => {
  const columnsTodoList: ColumnsType<TravelExpenseFormDto> = [
    {
      title: "标题",
      dataIndex: "title",
      align: "center",
      filterMultiple: false,
    },
    {
      title: "用户ID",
      dataIndex: "userId",
      align: "center",
      key: "userId",
      filterMultiple: false,
    },
    {
      title: "AI审核状态",
      dataIndex: "aiStatus",
      key: "aiStatus",
      align: "center",
      filterMultiple: false,
      render: (text) => {
        return (
          <div>
            {text === AuditStatusType.Pending
              ? "待审核中"
              : text === AuditStatusType.Approved
              ? "审核通过"
              : text === AuditStatusType.Rejected
              ? "审核不通过"
              : text === AuditStatusType.Inprogress && "审核中"}
          </div>
        );
      },
    },
    {
      title: "人工审核状态",
      dataIndex: "manualStatus",
      key: "manualStatus",
      align: "center",
      filterMultiple: false,
      render: (text) => {
        return (
          <div>
            {text === AuditStatusType.Pending
              ? "待审核中"
              : text === AuditStatusType.Approved
              ? "审核通过"
              : text === AuditStatusType.Rejected
              ? "审核不通过"
              : text === AuditStatusType.Inprogress && "审核中"}
          </div>
        );
      },
    },
    {
      title: "报销类型",
      dataIndex: "type",
      key: "type",
      align: "center",
      filterMultiple: false,
      render: (text) => {
        return (
          <div>
            {text === TravelExpenseFormType.TourismFund ? "旅游基金" : text}
          </div>
        );
      },
    },
    {
      title: "申请日期",
      dataIndex: "createdDate",
      key: "createdDate",
      align: "center",
      filterMultiple: false,
      render: (text) => {
        return <div>{dayjs(text).format("YYYY-MM-DD")}</div>;
      },
    },
    {
      title: "审批日期",
      dataIndex: "approvedDate",
      key: "approvedDate",
      align: "center",
      filterMultiple: false,
      render: (text) => {
        return <div>{text ? dayjs(text).format("YYYY-MM-DD") : "审核中"}</div>;
      },
    },
  ];
  return (
    <Table
      className="mt-3 mx-3"
      columns={columnsTodoList}
      dataSource={applyReimbursement}
      rowKey={(record) => record.id}
      loading={tableLoading}
      scroll={{ x: 800 }}
      pagination={false}
    />
  );
};

export default TableList;
