import Table, { ColumnsType } from "antd/es/table"

import { TravelApplicationResponses } from "../../../../services/dtos/travel-application"

import moment from "moment"

const TableList = ({
  applicateList,
}: {
  applicateList?: TravelApplicationResponses[]
}) => {
  const columnsTodoList: ColumnsType<TravelApplicationResponses> = [
    {
      title: "申请费用",
      dataIndex: "customPrice",
      align: "center",
    },
    {
      title: "出行日期",
      dataIndex: "travelDate",
      align: "center",
      render: (text) => {
        return <div>{moment(text).format("YYYY-MM-DD")}</div>
      },
    },
    {
      title: "是否组团",
      dataIndex: "isGroup",
      align: "center",
      render: (text) => {
        return <div>{text ? "是" : "否"}</div>
      },
    },
    {
      title: "回程日期",
      dataIndex: "returnDate",
      align: "center",
      render: (text) => {
        return <div>{moment(text).format("YYYY-MM-DD")}</div>
      },
    },
  ]
  return (
    <Table
      className="mt-3 mx-3"
      columns={columnsTodoList}
      dataSource={applicateList}
      pagination={false}
      rowKey={(record) => record.id}
    />
  )
}

export default TableList
