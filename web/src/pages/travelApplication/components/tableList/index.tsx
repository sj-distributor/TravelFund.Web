import Table, { ColumnsType } from "antd/es/table"

import { ApplicateList } from "../../props"

const TableList = ({ applicateList }: { applicateList?: ApplicateList[] }) => {
  const columnsTodoList: ColumnsType<ApplicateList> = [
    {
      title: "申请费用",
      dataIndex: "customPrice",
      align: "center",
    },
    {
      title: "出行日期",
      dataIndex: "travelDate",
      align: "center",
    },
    {
      title: "是否组团",
      dataIndex: "isGroup",
      align: "center",
    },
    {
      title: "回程日期",
      dataIndex: "returnDate",
      align: "center",
    },
  ]
  return (
    <Table
      className="mt-3 mx-3"
      columns={columnsTodoList}
      dataSource={applicateList}
      pagination={false}
    />
  )
}

export default TableList
