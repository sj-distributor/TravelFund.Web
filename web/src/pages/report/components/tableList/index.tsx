import Table, { ColumnsType } from "antd/es/table"
import { filterArray } from "../../../../utils/table/fliter-table"

import { ReportDataProps } from "@/services/dtos/report"

const TableList = ({ reportData }: { reportData: ReportDataProps[] }) => {
  const columnsTodoList: ColumnsType<ReportDataProps> = [
    {
      title: "申请名称",
      dataIndex: "applyName",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { applyName: string }) => !!x.applyName)
            .map((item: { applyName: string }) => item.applyName)
        ),
    },
    {
      title: "申请类型",
      dataIndex: "applyType",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { applyType: string }) => !!x.applyType)
            .map((item: { applyType: string }) => item.applyType)
        ),
    },
    {
      title: "申请日期",
      dataIndex: "applyDate",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { applyDate: string }) => !!x.applyDate)
            .map((item: { applyDate: string }) => item.applyDate)
        ),
    },
    {
      title: "审批日期",
      dataIndex: "approveDate",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { approveDate: string }) => !!x.approveDate)
            .map((item: { approveDate: string }) => item.approveDate)
        ),
    },
    {
      title: "票面金额",
      dataIndex: "invoiceMoney",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { invoiceMoney: string }) => !!x.invoiceMoney)
            .map((item: { invoiceMoney: string }) => item.invoiceMoney)
        ),
    },
    {
      title: "实报金额",
      dataIndex: "realityMoney",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { realityMoney: string }) => !!x.realityMoney)
            .map((item: { realityMoney: string }) => item.realityMoney)
        ),
    },
    {
      title: "审批人",
      dataIndex: "approver",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { approver: string }) => !!x.approver)
            .map((item: { approver: string }) => item.approver)
        ),
    },
  ]

  return (
    <Table
      className="mt-5 mx-3"
      columns={columnsTodoList}
      dataSource={reportData}
    ></Table>
  )
}
export default TableList
