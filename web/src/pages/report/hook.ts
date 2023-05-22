import { ReportDataProps } from "@/services/dtos/report";
import { useState } from "react";

const useAction = () => {
  const [startDate, setStartDate] = useState<string>("");

  const [endDate, setEndData] = useState<string>("");

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
      id: 3,
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/07/30",
      approveDate: "2023/08/30",
      invoiceMoney: "¥3000",
      realityMoney: "¥3000",
      approver: "CARRY.Y",
    },
    {
      id: 4,
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/07/30",
      approveDate: "2023/08/30",
      invoiceMoney: "¥3000",
      realityMoney: "¥3000",
      approver: "CARRY.Y",
    },
    {
      id: 5,
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/07/30",
      approveDate: "2023/08/30",
      invoiceMoney: "¥3000",
      realityMoney: "¥3000",
      approver: "CARRY.Y",
    },
    {
      id: 6,
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/07/30",
      approveDate: "2023/08/30",
      invoiceMoney: "¥3000",
      realityMoney: "¥3000",
      approver: "CARRY.Y",
    },
  ];

  const onChangeRangeDate = (date: string[]) => {
    setStartDate(date[0]);
    setEndData(date[1]);
  };

  return { reportData, onChangeRangeDate };
};
export default useAction;
