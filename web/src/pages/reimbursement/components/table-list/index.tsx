import Table, { ColumnsType } from "antd/es/table"

import { filterArray } from "../../../../utils/table/fliter-table"
import { ApplyReimbursementProps } from "@/services/dtos/apply-reimbursement"

const TableList = ({
  applyReimbursement,
}: {
  applyReimbursement: ApplyReimbursementProps[]
}) => {
  const columnsTodoList: ColumnsType<ApplyReimbursementProps> = [
    {
      title: "申请名称",
      dataIndex: "applyName",
      align: "center",
      filters:
        applyReimbursement &&
        filterArray(
          applyReimbursement
            .filter((x: { applyName: string }) => !!x.applyName)
            .map((item: { applyName: string }) => item.applyName)
        ),
    },
    {
      title: "申请类型",
      dataIndex: "applyType",
      align: "center",
      filters:
        applyReimbursement &&
        filterArray(
          applyReimbursement
            .filter((x: { applyType: string }) => !!x.applyType)
            .map((item: { applyType: string }) => item.applyType)
        ),
    },
    {
      title: "申请日期",
      dataIndex: "applyDate",
      align: "center",
      filters:
        applyReimbursement &&
        filterArray(
          applyReimbursement
            .filter((x: { applyDate: string }) => !!x.applyDate)
            .map((item: { applyDate: string }) => item.applyDate)
        ),
    },
    {
      title: "进度",
      dataIndex: "applyProgress",
      align: "center",
      filters:
        applyReimbursement &&
        filterArray(
          applyReimbursement
            .filter((x: { applyProgress: string }) => !!x.applyProgress)
            .map((item: { applyProgress: string }) => item.applyProgress)
        ),
    },
  ]
  return (
    <Table
      className="mt-3 mx-3"
      columns={columnsTodoList}
      dataSource={applyReimbursement}
    />
  )
}

export default TableList
