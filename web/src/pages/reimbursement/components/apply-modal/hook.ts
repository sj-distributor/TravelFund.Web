import { useState } from "react"
import { reimburseTypeOptions } from "./props"

import { PostInvoiceImg } from "../../../../services/api/reimbursement"

const useAction = () => {
  const [uploadImg, setUploadImg] = useState<string>("")

  const reimburseTypeSelect: reimburseTypeOptions[] = [
    {
      value: "travelFund",
      label: "旅游基金",
    },
    {
      value: "option1",
      label: "option1",
    },
    {
      value: "option2",
      label: "option2",
    },
  ]

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 0) return
    const file = e.target.files && e.target.files[0]
    e.target.value = ""
    const formData = new FormData()
    formData.append("file", file!)
    const attachmentId = await PostInvoiceImg(formData)
    if (attachmentId) {
      setUploadImg(attachmentId.fileUrl)
    }
  }

  return {
    reimburseTypeSelect,
    uploadFile,
    uploadImg,
  }
}

export default useAction
