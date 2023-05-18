import useAction from "./hook"
import { DatePicker, InputNumber, Select, Form, Button } from "antd"
import moment from "moment"

import React, { useImperativeHandle, forwardRef } from "react"

const ApplyModal = forwardRef(
  (props: { submitTravelApplication: () => void }, ref) => {
    const submitTravelApplication = props.submitTravelApplication

    const {
      customPrice,
      isGroup,
      travelDate,
      returnDate,
      setCustomPrice,
      setIsGroup,
      setTravelDate,
      setReturnDate,
    } = useAction()

    useImperativeHandle(ref, () => ({
      customPrice,
      isGroup,
      travelDate,
      returnDate,
    }))

    return (
      <div className="flex flex-col w-[30rem]">
        <Form
          className="mx-10 relative"
          onFinish={() => submitTravelApplication()}
          preserve={false}
        >
          <Form.Item
            label="申请费用"
            name="申请费用"
            rules={[{ required: true, message: "请填写申请费用！" }]}
            className="my-7"
          >
            <InputNumber
              className="w-full"
              placeholder="单位（元）"
              min={0}
              onChange={(value) => {
                setCustomPrice(value ? value : 0)
              }}
            />
          </Form.Item>
          <Form.Item
            label="出游日期"
            name="出游日期"
            rules={[{ required: true, message: "请选择出游日期！" }]}
            className="my-7"
          >
            <DatePicker
              className="w-full"
              placeholder="选择出游日期"
              format="YYYY-MM-DD"
              onChange={(date, dateString: string) =>
                setTravelDate(moment(dateString).utc().format())
              }
            />
          </Form.Item>
          <Form.Item
            label="是否组团"
            name="是否组团"
            rules={[{ required: true, message: "请选择是否组团！" }]}
            className="my-7"
          >
            <Select
              className="w-full"
              optionFilterProp="children"
              options={[
                { value: true, label: "是" },
                { value: false, label: "否" },
              ]}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              onChange={(value) => setIsGroup(value)}
              allowClear
            />
          </Form.Item>
          <Form.Item
            label="回程日期"
            name="回程日期"
            rules={[{ required: true, message: "请选择回程日期！" }]}
            className="my-7"
          >
            <DatePicker
              className="w-full"
              placeholder="选择回程日期"
              format="YYYY-MM-DD"
              onChange={(date, dateString: string) =>
                setReturnDate(moment(dateString).utc().format())
              }
            />
          </Form.Item>
          <Form.Item className="mt-10" wrapperCol={{ offset: 19, span: 16 }}>
            <Button
              type="primary"
              className="bg-gray-700 text-white h-10"
              htmlType="submit"
            >
              提交申请
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
)
export default ApplyModal
