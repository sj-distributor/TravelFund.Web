import { useState } from "react"
import { ApplyReimbursementProps } from "@/services/dtos/apply-reimbursement"

const useAction = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const applyReimbursement: ApplyReimbursementProps[] = [
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
    {
      applyName: "SARAH的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      applyProgress: "审批中",
    },
  ]

  return { applyReimbursement, isModalOpen, setIsModalOpen }
}

export default useAction
