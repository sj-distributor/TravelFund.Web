import React, { useImperativeHandle, forwardRef } from "react"
import useAction from "./hook"
import { UploadOutlined } from "@ant-design/icons"
import { Button, Select, Upload } from "antd"

const UploadInvoice = forwardRef((props, ref) => {
  const { selectType, invoiceType, setInvoiceType, upLoadFile, uploadId } =
    useAction()

  useImperativeHandle(ref, () => ({ invoiceType, uploadId }))
  return (
    <div className="mt-7">
      <div className="flex items-center w-full my-7">
        <div className="w-20 text-gray-900">报销类型：</div>
        <Select
          className="w-52"
          showSearch
          optionFilterProp="children"
          options={selectType}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          onChange={(value) => {
            setInvoiceType(value)
          }}
          allowClear
        />
      </div>
      <Upload
        beforeUpload={() => {
          return false
        }}
        onChange={(file) => upLoadFile(file)}
        maxCount={1}
      >
        <Button className="flex items-center" icon={<UploadOutlined />}>
          上传发票
        </Button>
      </Upload>
    </div>
  )
})

export default UploadInvoice
