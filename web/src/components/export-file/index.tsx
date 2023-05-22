import ExportJsonExcel from "js-export-excel";

import { ReportDataProps } from "@/services/dtos/report";

const ExportFile = (dataSource: ReportDataProps[]) => {
  let option = {
    fileName: "demo表",
    datas: [
      {
        sheetData: dataSource,
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
  };
  let toExcel = new ExportJsonExcel(option);
  toExcel.saveExcel();
};

export default ExportFile;
