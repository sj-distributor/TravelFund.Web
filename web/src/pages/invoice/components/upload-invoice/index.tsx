import React, { useImperativeHandle, forwardRef } from "react"
import useAction from "./hook"
import { UploadOutlined } from "@ant-design/icons"
import { Button, Select, Upload, Form } from "antd"

const UploadInvoice = forwardRef((props: { submitBtn: () => void }, ref) => {
  const submitBtn = props.submitBtn

  const { selectType, invoiceType, setInvoiceType, upLoadFile, uploadId } =
    useAction()

  useImperativeHandle(ref, () => ({ invoiceType, uploadId }))
  return (
    <div className="mt-7 w-[30rem]">
      <Form
        className="mx-10 my-7"
        onFinish={() => submitBtn()}
        preserve={false}
      >
        <Form.Item
          label="报销类型"
          name="报销类型"
          rules={[{ required: true, message: "请选择报销类型！" }]}
          className="my-10"
        >
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
        </Form.Item>
        <Form.Item
          label="上传发票"
          name="上传发票"
          rules={[{ required: true, message: "请上传发票！" }]}
          className="my-10"
        >
          <Upload
            beforeUpload={() => {
              return false
            }}
            onChange={(file) => upLoadFile(file)}
            maxCount={1}
            accept="image/*"
          >
            <Button className="flex items-center" icon={<UploadOutlined />}>
              选择图片
            </Button>
          </Upload>
          <div className="text-[#9a9f9f] italic text-xs mt-2">
            (仅支持上传图片)
          </div>
        </Form.Item>
        <Form.Item className="mt-10" wrapperCol={{ offset: 20, span: 16 }}>
          <Button
            type="primary"
            className="bg-gray-700 text-white"
            htmlType="submit"
          >
            上传
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})

export default UploadInvoice
