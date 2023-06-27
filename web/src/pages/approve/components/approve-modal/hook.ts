import dayjs from "dayjs";

import { PostApproveExpense } from "../../../../services/api/approve";

import { TravelInvoices } from "../../../../services/dtos/invoice";

import { IApproveModalListProps } from "../../../../services/dtos/approve-management";

import { TravelApplicationResponses } from "../../../../services/dtos/travel-application";

import {
  TravelExpenseFormType,
  TravelExpenseFormDto,
  AuditStatusType,
} from "../../../../services/dtos/apply-reimbursement";
import { message } from "antd";
import { useState } from "react";

const useAction = (props: {
  currentTravelRequestData: TravelApplicationResponses[];
  currentInvoiceData: TravelInvoices[];
  currentExpenseData: TravelExpenseFormDto;
  setIsModalOpen: (boolean: boolean) => void;
  getApproveList: () => void;
}) => {
  const [manualStatus, setManualStatus] = useState<AuditStatusType>(
    AuditStatusType.Approved
  );

  const [rejectedReason, setRejectedReason] = useState<string>("");

  const travelRequest = props.currentTravelRequestData[0];

  const invoiceDataList = props.currentInvoiceData;

  const expenseAiStatus = props.currentExpenseData.aiStatus;

  const travelExpenseFormId = props.currentExpenseData.id;

  const approveModalList: IApproveModalListProps[] = [
    {
      title: "申请信息",
      applyMessage: [
        {
          applicationLabel: "申请人：",
          applicationContent: travelRequest?.userName,
        },
        {
          applicationLabel: "申请类型：",
          applicationContent: `${
            travelRequest?.type === TravelExpenseFormType.TourismFund
              ? "旅游基金"
              : travelRequest?.type
          }`,
        },
        {
          applicationLabel: "出游日期：",
          applicationContent: dayjs(travelRequest?.travelDate).format(
            "YYYY-MM-DD"
          ),
        },
        {
          applicationLabel: "回程日期：",
          applicationContent: dayjs(travelRequest?.returnDate).format(
            "YYYY-MM-DD"
          ),
        },
        {
          applicationLabel: "报销额度：",
          applicationContent: `¥${travelRequest?.customPrice}`,
        },
        {
          applicationLabel: "发票额度：",
          applicationContent: `¥${travelRequest?.invoicePrice}`,
        },
        {
          applicationLabel: "实际额度：",
          applicationContent: `¥${travelRequest?.actualPrice}`,
        },
      ],
    },
    {
      title: "附件",
      invoice: invoiceDataList,
    },
    {
      title: "AI审批意见",
      expenseAiStatus: expenseAiStatus,
    },
    {
      title: "人工审批意见",
      manualOpinionContent:
        "根据公司福利政策，你享有旅游基金报销资格。资料审核通过，允许进行报销。",
    },
  ];

  const handleApproveExpense = () => {
    if (manualStatus === AuditStatusType.Rejected && !rejectedReason) {
      message.error("请输入拒绝理由");
    } else {
      PostApproveExpense({
        travelExpenseFormId: travelExpenseFormId,
        manualStatus: manualStatus,
        rejectedReason: rejectedReason,
      })
        .then((res) => {
          if (res) {
            props.setIsModalOpen(false);
            manualStatus === AuditStatusType.Rejected
              ? message.success("Successfully rejected")
              : message.success("Successfully approved");
            props.getApproveList();
          }
        })
        .catch((err) => {
          message.error("Unsuccessful");
        });
    }
  };

  return {
    approveModalList,
    handleApproveExpense,
    setRejectedReason,
    manualStatus,
    setManualStatus,
  };
};
export default useAction;
