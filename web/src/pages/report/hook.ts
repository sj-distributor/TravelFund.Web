import { ReportDataProps } from "@/services/dtos/report"

import ExportJsonExcel from "js-export-excel"

const useAction = () => {
  const reportData: ReportDataProps[] = [
    {
      id: 1,
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2022/05/30",
      approveDate: "2022/08/30",
      invoiceMoney: "¥3000",
      realityMoney: "¥3000",
      approver: "CARRY.Y",
    },
    {
      id: 2,
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      approveDate: "2023/04/30",
      invoiceMoney: "¥3000",
      realityMoney: "¥3000",
      approver: "CARRY.Y",
    },
    {
      id: 2,
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/07/30",
      approveDate: "2023/08/30",
      invoiceMoney: "¥3000",
      realityMoney: "¥3000",
      approver: "CARRY.Y",
    },
  ]

  const exportFile = () => {
    let option = {
      fileName: "demo表",
      datas: [
        {
          sheetData: reportData,
          sheetName: "demo",
          sheetFilter: [
            "applyName",
            "applyType",
            "applyDate",
            "approveDate",
            "invoiceMoney",
            "realityMoney",
            "approver",
          ],
          sheetHeader: [
            "申请名称",
            "申请类型",
            "申请日期",
            "审批日期",
            "票面金额",
            "实报金额",
            "审批人",
          ],
        },
      ],
    }
    let toExcel = new ExportJsonExcel(option)
    toExcel.saveExcel()
  }

  return { reportData, exportFile }
}
export default useAction
