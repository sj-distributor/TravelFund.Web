import Table, { ColumnsType } from "antd/es/table";
import { Popover, Tag } from "antd";
import { ClockCircleOutlined, MenuOutlined } from "@ant-design/icons";

import dayjs from "dayjs";
import {
  TravelExpenseFormDto,
  TravelExpenseFormType,
  AuditStatusType,
} from "../../../../services/dtos/apply-reimbursement";

import StatusTags from "../../../../components/status-tags";

const RejectedReason = (rejectedReason: string) => {
  return <div>{rejectedReason}</div>;
};

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
      title: "AI审核状态",
      dataIndex: "aiStatus",
      key: "aiStatus",
      align: "center",
      filterMultiple: false,
      render: (statusType) => StatusTags(statusType),
    },
    {
      title: "人工审核状态",
      dataIndex: "manualStatus",
      key: "manualStatus",
      align: "center",
      filterMultiple: false,
      render: (statusType, row) => {
        return (
          <div className="flex items-center justify-center ml-5">
            {StatusTags(statusType)}
            <Popover
              className="cursor-pointer"
              placement="right"
              title="不通过原因："
              trigger="click"
              content={RejectedReason(row.rejectedReason)}
            >
              <MenuOutlined
                style={{
                  visibility: `${
                    statusType === AuditStatusType.Rejected
                      ? "visible"
                      : "hidden"
                  }`,
                }}
              />
            </Popover>
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
        return (
          <div className="flex justify-center items-center">
            {text ? (
              dayjs(text).format("YYYY-MM-DD")
            ) : (
              <Tag icon={<ClockCircleOutlined />} color="default">
                审核中
              </Tag>
            )}
          </div>
        );
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
      scroll={{ x: 800, y: 560 }}
      pagination={false}
    />
  );
};

export default TableList;
