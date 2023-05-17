import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { reimburseTypeOptions } from "./props";
import {
  PostAddExpense,
  PostInvoiceImg,
} from "../../../../services/api/reimbursement";
import { message } from "antd";
import { GetTravelApplicationList } from "../../../../services/api/travel-application";
import { GetInvoiceList } from "../../../../services/api/invoice";
import { TravelInvoices } from "../../../../services/dtos/invoice";
import { TravelApplicationResponses } from "../../../../services/dtos/travel-application";
import {
  DtoType,
  PostAddExpenseDto,
  UserValue,
} from "@/services/dtos/apply-reimbursement";

const useAction = (props: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  getExpenseList: () => void;
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { setIsModalOpen, getExpenseList } = props;
  const [uploadImg, setUploadImg] = useState<string>("");
  const [dto, setDto] = useState<DtoType>({
    title: "",
    type: 10,
    travelRequestFormId: [],
    travelInvoiceIds: [],
  });
  const [value, setValue] = useState<UserValue[]>([]);
  const reimburseTypeSelect: reimburseTypeOptions[] = [
    {
      value: "10",
      label: "旅游基金",
    },
  ];

  async function fetchUserList(id: string): Promise<UserValue[]> {
    const data = await GetInvoiceList({
      PageIndex: 1,
      PageSize: 999,
    }).then((res) => {
      if (res && res.travelInvoices) {
        const travelInvoices = res.travelInvoices;
        const data = travelInvoices.map((item: TravelInvoices) => ({
          value: item.id,
          label: `发票ID:${item.id} `,
        }));
        return data as unknown as UserValue[];
      }
    });
    return data ? data : [];
  }
  async function fetchTravelRequestList(id: string): Promise<UserValue[]> {
    const data = await GetTravelApplicationList({
      PageIndex: 1,
      PageSize: 999,
    }).then((res) => {
      if (res) {
        const travelRequestForms = res?.travelRequestForms;
        const data = travelRequestForms.map(
          (item: TravelApplicationResponses) => ({
            value: item.id,
            label: `用户ID:${item.userId} 申请表格ID:${item.customPrice}`,
          })
        );
        return data as unknown as UserValue[];
      }
    });
    return data ? data : [];
  }

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 0) return;
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    const formData = new FormData();
    formData.append("file", file!);
    const attachmentId = await PostInvoiceImg(formData);
    if (attachmentId) {
      setUploadImg(attachmentId.fileUrl);
    }
  };

  const handleAddExpense = () => {
    if (!dto.title) {
      messageApi.open({
        type: "warning",
        content: "The title field needs to be filled in",
      });
      return;
    }

    if (dto.travelRequestFormId.length < 1) {
      messageApi.open({
        type: "warning",
        content: "TravelRequestFormId needs to be selected",
      });
      return;
    }

    if (dto.travelRequestFormId.length < 1) {
      messageApi.open({
        type: "warning",
        content: "TravelInvoiceIds needs to be selected",
      });
      return;
    }

    let travelInvoiceIds: number[] = [];
    let travelRequestFormId: number;
    travelRequestFormId = +(dto.travelRequestFormId as unknown as UserValue)
      .value;
    dto.travelInvoiceIds.map((item) => travelInvoiceIds.push(+item.value));
    const data: PostAddExpenseDto = {
      travelExpenseFormData: {
        title: dto.title,
        type: +dto.type,
        travelRequestFormId,
        travelInvoiceIds,
      },
    };

    PostAddExpense(data)
      .then((res) => {
        setIsModalOpen(false);
        messageApi.open({
          type: "success",
          content: "Successfully applied",
        });
        getExpenseList();
        setDto({
          title: "",
          type: 10,
          travelRequestFormId: [],
          travelInvoiceIds: [],
        });
      })
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: "Unsuccessful",
        });
        setDto({
          title: "",
          type: 10,
          travelRequestFormId: [],
          travelInvoiceIds: [],
        });
      });
  };

  return {
    reimburseTypeSelect,
    contextHolder,
    uploadFile,
    uploadImg,
    dto,
    handleAddExpense,
    setDto,
    fetchUserList,
    value,
    setValue,
    fetchTravelRequestList,
  };
};

export default useAction;
