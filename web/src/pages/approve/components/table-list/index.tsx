import Table, { ColumnsType } from "antd/es/table"

import { filterArray } from "../../../../utils/table/fliter-table"
import {
  ApplyDataProps,
  TableListProps,
} from "@/services/dtos/approve-management"

const TableList = ({ handleAddOpen, applyData }: TableListProps) => {
  const columnsTodoList: ColumnsType<ApplyDataProps> = [
    {
      title: "申请名称",
      dataIndex: "applyHuman",
      align: "center",
      filters:
        applyData &&
        filterArray(
          applyData
            .filter((x: { applyHuman: string }) => !!x.applyHuman)
            .map((item: { applyHuman: string }) => item.applyHuman)
        ),
      onFilter: (value: any, record) => record.applyHuman.indexOf(value) === 0,
      filterMultiple: false,
    },
    {
      title: "申请类型",
      dataIndex: "applyType",
      align: "center",
      filters:
        applyData &&
        filterArray(
          applyData
            .filter((x: { applyType: string }) => !!x.applyType)
            .map((item: { applyType: string }) => item.applyType)
        ),
      onFilter: (value: any, record) => record.applyType.indexOf(value) === 0,
      filterMultiple: false,
    },
    {
      title: "申请日期",
      dataIndex: "applyDate",
      align: "center",
      filters:
        applyData &&
        filterArray(
          applyData
            .filter((x: { applyDate: string }) => !!x.applyDate)
            .map((item: { applyDate: string }) => item.applyDate)
        ),
      onFilter: (value: any, record) => record.applyDate.indexOf(value) === 0,
      filterMultiple: false,
    },
    {
      title: "操作",
      dataIndex: "action",
      align: "center",
      width: 220,
      render: (action, record) => {
        return (
          <div
            className="flex justify-center items-center cursor-pointer border border-gray-200 w-24 h-8 ml-12 bg-gray-100 hover:bg-gray-200 hover:border-gray-300 rounded-[0.5rem]"
            onClick={() => {
              handleAddOpen(record)
            }}
          >
            <div>{action}</div>
          </div>
        )
      },
    },
  ]
  return (
    <Table
      className="mt-3 mx-3"
      columns={columnsTodoList}
      dataSource={applyData}
      pagination={{ position: ["bottomRight"], defaultPageSize: 10 }}
      rowKey={(record) => record.id}
      scroll={{ x: 800 }}
    />
  )
}

export default TableList
