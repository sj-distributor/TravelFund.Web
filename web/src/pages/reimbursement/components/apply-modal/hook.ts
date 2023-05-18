import { useState } from "react";
import { ApplyModalProps, reimburseTypeOptions } from "./props";
import { PostAddExpense } from "../../../../services/api/reimbursement";
import { GetTravelApplicationList } from "../../../../services/api/travel-application";
import { GetInvoiceList } from "../../../../services/api/invoice";
import { TravelInvoices } from "../../../../services/dtos/invoice";
import { TravelApplicationResponses } from "../../../../services/dtos/travel-application";
import {
  addExpenseDataType,
  PostAddExpenseDto,
  TravelExpenseFormType,
  UserValue,
} from "../../../../services/dtos/apply-reimbursement";
import { message } from "antd";

const useAction = (props: ApplyModalProps) => {
  const { setIsModalOpen, getExpenseList } = props;
  const [loading, setLoading] = useState(false);
  const [addExpenseData, setAddExpenseData] = useState<addExpenseDataType>({
    title: "",
    type: TravelExpenseFormType.TourismFund,
    travelRequestFormId: [],
    travelInvoiceIds: [],
  });
  const reimburseTypeSelect: reimburseTypeOptions[] = [
    {
      value: TravelExpenseFormType.TourismFund + "",
      label: "旅游基金",
    },
  ];

  async function fetchInvoiceList(id: string): Promise<UserValue[]> {
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
            label: `用户ID:${item.userId} 申请表单ID:${item.id}`,
          })
        );
        return data as unknown as UserValue[];
      }
    });
    return data ? data : [];
  }

  const handleAddExpense = () => {
    if (!addExpenseData.title) {
      message.open({
        type: "warning",
        content: "The title field needs to be filled in",
      });
      return;
    }

    if (addExpenseData.travelRequestFormId.length < 1) {
      message.open({
        type: "warning",
        content: "TravelRequestFormId needs to be selected",
      });
      return;
    }

    if (addExpenseData.travelRequestFormId.length < 1) {
      message.open({
        type: "warning",
        content: "TravelInvoiceIds needs to be selected",
      });
      return;
    }

    let travelInvoiceIds: number[] = [];
    let travelRequestFormId: number;
    travelRequestFormId = +(
      addExpenseData.travelRequestFormId as unknown as UserValue
    ).value;

    addExpenseData.travelInvoiceIds.map((item) =>
      travelInvoiceIds.push(+item.value)
    );

    const data: PostAddExpenseDto = {
      travelExpenseFormData: {
        title: addExpenseData.title,
        type: +addExpenseData.type,
        travelRequestFormId,
        travelInvoiceIds,
      },
    };
    setLoading(true);
    PostAddExpense(data)
      .then((res) => {
        setIsModalOpen(false);
        message.open({
          type: "success",
          content: "Successfully applied",
        });
        getExpenseList();
        setAddExpenseData({
          title: "",
          type: TravelExpenseFormType.TourismFund,
          travelRequestFormId: [],
          travelInvoiceIds: [],
        });
        setLoading(false);
      })
      .catch((err) => {
        message.open({
          type: "error",
          content: "Unsuccessful",
        });
        setAddExpenseData({
          title: "",
          type: TravelExpenseFormType.TourismFund,
          travelRequestFormId: [],
          travelInvoiceIds: [],
        });
        setLoading(false);
      });
  };

  return {
    reimburseTypeSelect,
    addExpenseData,
    loading,
    handleAddExpense,
    setAddExpenseData,
    fetchInvoiceList,
    fetchTravelRequestList,
  };
};

export default useAction;
