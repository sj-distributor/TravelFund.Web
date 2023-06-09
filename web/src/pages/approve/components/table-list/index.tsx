import Table, { ColumnsType } from "antd/es/table";

import dayjs from "dayjs";

import {
  TravelExpenseFormDto,
  TravelExpenseFormType,
} from "../../../../services/dtos/apply-reimbursement";

const TableList = ({
  applyDataList,
  tableLoading,
  handleAddOpen,
}: {
  applyDataList: TravelExpenseFormDto[];
  tableLoading: boolean;
  handleAddOpen: (record: TravelExpenseFormDto) => void;
}) => {
  const columnsTodoList: ColumnsType<TravelExpenseFormDto> = [
    {
      title: "申请标题",
      dataIndex: "title",
      align: "center",
      filterMultiple: false,
    },
    {
      title: "申请名称",
      dataIndex: "userName",
      align: "center",
      filterMultiple: false,
    },
    {
      title: "申请类型",
      dataIndex: "type",
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
      align: "center",
      filterMultiple: false,
      render: (text) => {
        return <div>{dayjs(text).format("YYYY-MM-DD")}</div>;
      },
    },
    {
      title: "操作",
      dataIndex: "",
      align: "center",
      width: 220,
      render: (record) => {
        return (
          <div
            className="flex justify-center items-center cursor-pointer border border-gray-200 w-24 h-8 ml-12 bg-gray-100 hover:bg-gray-200 hover:border-gray-300 rounded-[0.5rem]"
            onClick={() => {
              handleAddOpen(record);
            }}
          >
            <div>进行审批</div>
          </div>
        );
      },
    },
  ];
  return (
    <Table
      className="mt-10 mx-3"
      columns={columnsTodoList}
      dataSource={applyDataList}
      rowKey={(record) => record.id}
      loading={tableLoading}
      scroll={{ x: 800, y: 560 }}
      pagination={false}
    />
  );
};

export default TableList;
