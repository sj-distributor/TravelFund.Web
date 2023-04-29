import { useState } from "react"
import type { UploadProps } from "antd"

interface Options {
  value: string
  label: string
}

const useAction = () => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false)

  const options: Options[] = [
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

  const props: UploadProps = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", //图片上传地址
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList)
      }
    },
  }

  return { options, props, showConfirm, setShowConfirm }
}

export default useAction
