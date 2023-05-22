import { useState } from "react";

import { PostUrlImg } from "../../../../services/api/invoice";
import { Type } from "../../../../services/dtos/invoice";

const useAction = () => {
  const [invoiceType, setInvoiceType] = useState<number>(0);

  const [uploadId, setUploadId] = useState<number>(0);

  const selectType: { value: number; label: string }[] = [
    {
      value: Type.TourismFund,
      label: "旅游基金",
    },
    {
      value: Type.TravelExpenses,
      label: "差旅费用",
    },
    {
      value: Type.PhysicalExamination,
      label: "体检费用",
    },
  ];

  const upLoadFile = async (file: Record<string, any>) => {
    const formData = new FormData();
    formData.append("file", file.file!);

    const attachmentId = await PostUrlImg(formData);
    if (attachmentId) {
      setUploadId(attachmentId.id);
    }
  };

  return {
    selectType,
    invoiceType,
    setInvoiceType,
    upLoadFile,
    uploadId,
  };
};
export default useAction;
