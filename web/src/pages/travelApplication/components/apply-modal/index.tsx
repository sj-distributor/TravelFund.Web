import useAction from "./hook"
import { DatePicker, InputNumber, Select } from "antd"
import moment from "moment"

import React, { useImperativeHandle, forwardRef } from "react"

const ApplyModal = forwardRef((props, ref) => {
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
      <div className="mx-10 relative">
        <div className="flex items-center w-full my-7">
          <div className="w-28 text-gray-900">申请费用：</div>
          <InputNumber
            className="w-full"
            placeholder="单位（元）"
            min={0}
            onChange={(value) => {
              setCustomPrice(value ? value : 0)
            }}
          />
        </div>
        <div className="flex items-center w-full my-7">
          <div className="w-28 text-gray-900">出游日期：</div>
          <DatePicker
            className="w-full"
            placeholder="选择出游日期"
            format="YYYY-MM-DD"
            onChange={(date, dateString: string) =>
              setTravelDate(moment(dateString).utc().format())
            }
          />
        </div>
        <div className="flex items-center w-full my-7">
          <div className="w-28 text-gray-900">是否组团：</div>
          <Select
            className="w-full"
            optionFilterProp="children"
            options={[
              { value: true, label: "是" },
              { value: false, label: "否" },
            ]}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            onChange={(value) => setIsGroup(value)}
          />
        </div>
        <div className="flex items-center w-full my-7">
          <div className="w-28 text-gray-900">回程日期：</div>
          <DatePicker
            className="w-full"
            placeholder="选择回程日期"
            format="YYYY-MM-DD"
            onChange={(date, dateString: string) =>
              setReturnDate(moment(dateString).utc().format())
            }
          />
        </div>
      </div>
    </div>
  )
})
export default ApplyModal
