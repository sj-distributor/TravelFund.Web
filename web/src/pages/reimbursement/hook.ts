import { useRef } from "react"
import { ApplyReimbursementProps } from "@/services/dtos/applyReimbursement"
import { ModalBoxRef } from "@/services/dtos/approveManagement"

const useAction = () => {
  const applyRef = useRef<ModalBoxRef>(null)

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
  ]

  return { applyRef, applyReimbursement }
}

export default useAction
