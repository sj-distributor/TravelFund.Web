import { useState } from "react";

import { TravelInvoiceType } from "../../../../services/dtos/invoice";

const useAction = () => {
  const [invoiceType, setInvoiceType] = useState<number>(0);

  const [file, setFile] = useState<Record<string, any>>();

  const selectType: { value: number; label: string }[] = [
    {
      value: TravelInvoiceType.TourismFund,
      label: "旅游基金",
    },
    {
      value: TravelInvoiceType.TravelExpenses,
      label: "差旅费用",
    },
    {
      value: TravelInvoiceType.PhysicalExamination,
      label: "体检费用",
    },
  ];

  return {
    selectType,
    invoiceType,
    setInvoiceType,
    file,
    setFile,
  };
};
export default useAction;
