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
      onFilter: (value: any, record) => record.applyName.indexOf(value) === 0,
      filterMultiple: false,
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
      onFilter: (value: any, record) => record.applyType.indexOf(value) === 0,
      filterMultiple: false,
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
      onFilter: (value: any, record) => record.applyDate.indexOf(value) === 0,
      filterMultiple: false,
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
      onFilter: (value: any, record) => record.approveDate.indexOf(value) === 0,
      filterMultiple: false,
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
      onFilter: (value: any, record) =>
        record.invoiceMoney.indexOf(value) === 0,
      filterMultiple: false,
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
      onFilter: (value: any, record) =>
        record.realityMoney.indexOf(value) === 0,
      filterMultiple: false,
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
      onFilter: (value: any, record) => record.approver.indexOf(value) === 0,
      filterMultiple: false,
    },
  ]

  return (
    <Table
      className="mt-3 mx-3"
      columns={columnsTodoList}
      dataSource={reportData}
      rowKey={(record) => record.id}
      scroll={{ x: 800 }}
    />
  )
}
export default TableList
