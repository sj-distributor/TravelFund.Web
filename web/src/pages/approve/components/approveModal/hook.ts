import {
  ApplyDataProps,
  ApproveModalListProps,
} from "@/services/dtos/approveManagement"
import { useState } from "react"

const useAction = (currentListData: ApplyDataProps) => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false)

  const approveModalList: ApproveModalListProps[] = [
    {
      title: "申请信息",
      applyMessage: [
        {
          applicationLabel: "申请人：",
          applicationContent: currentListData.applyHuman,
        },
        {
          applicationLabel: "申请类型：",
          applicationContent: currentListData.applyType,
        },
        {
          applicationLabel: "出游日期：",
          applicationContent: currentListData.travelDate,
        },
        {
          applicationLabel: "回程日期：",
          applicationContent: currentListData.returnDate,
        },
        {
          applicationLabel: "报销额度：",
          applicationContent: currentListData.claimLimit,
        },
        {
          applicationLabel: "发票额度：",
          applicationContent: currentListData.invoiceLimit,
        },
        {
          applicationLabel: "实际额度：",
          applicationContent: currentListData.realityLimit,
        },
      ],
    },
    {
      title: "附件",
      invoice: currentListData.invoice,
    },
    {
      title: "AI审批意见",
      opinions: {
        contents: currentListData.AIOpinions,
        status: currentListData.AIStatus,
      },
    },
    {
      title: "人工审批意见",
      opinions: {
        contents: currentListData.HumanOpinions,
      },
    },
  ]

  return { approveModalList, showConfirm, setShowConfirm }
}
export default useAction
