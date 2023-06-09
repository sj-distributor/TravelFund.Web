import { useContext, useState } from "react";

import { TravelInvoiceType } from "../../../../services/dtos/invoice";
import { UploadChangeParam, UploadFile } from "antd/es/upload";

import { InvoiceContext } from "../..";

const useAction = () => {
  const { submitBtn } = useContext(InvoiceContext);

  const [invoiceType, setInvoiceType] = useState<TravelInvoiceType>(
    TravelInvoiceType.TourismFund
  );

  const [uploadRecord, setUploadRecord] =
    useState<UploadChangeParam<UploadFile>>();

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
    uploadRecord,
    setUploadRecord,
    submitBtn,
  };
};
export default useAction;
