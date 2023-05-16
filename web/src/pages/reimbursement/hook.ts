import { useState } from "react"
import { ApplyReimbursementProps } from "@/services/dtos/apply-reimbursement"

const useAction = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const applyReimbursement: ApplyReimbursementProps[] = [
    {
      id: 1,
      applyName: "SARAH1的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/05/30",
      applyProgress: "审批中",
    },
    {
      id: 2,
      applyName: "SARAH2的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/06/30",
      applyProgress: "审批中",
    },
    {
      id: 3,
      applyName: "SARAH3的报销申请",
      applyType: "旅游基金",
      applyDate: "2022/04/30",
      applyProgress: "审批中",
    },
    {
      id: 4,
      applyName: "SARAH4的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/04/23",
      applyProgress: "审批中",
    },
    {
      id: 5,
      applyName: "SARAH5的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/02/29",
      applyProgress: "审批中",
    },
    {
      id: 6,
      applyName: "SARAH6的报销申请",
      applyType: "旅游基金",
      applyDate: "2023/02/29",
      applyProgress: "审批中",
    },
    // {
    //   id: 7,
    //   applyName: "SARAH7的报销申请",
    //   applyType: "旅游基金",
    //   applyDate: "2023/02/29",
    //   applyProgress: "审批中",
    // },
    // {
    //   id: 8,
    //   applyName: "SARAH7的报销申请",
    //   applyType: "旅游基金",
    //   applyDate: "2023/02/29",
    //   applyProgress: "审批中",
    // },
    // {
    //   id: 9,
    //   applyName: "SARAH7的报销申请",
    //   applyType: "旅游基金",
    //   applyDate: "2023/02/29",
    //   applyProgress: "审批中",
    // },
    // {
    //   id: 10,
    //   applyName: "SARAH7的报销申请",
    //   applyType: "旅游基金",
    //   applyDate: "2023/02/29",
    //   applyProgress: "审批中",
    // },
  ]

  return { applyReimbursement, isModalOpen, setIsModalOpen }
}

export default useAction
