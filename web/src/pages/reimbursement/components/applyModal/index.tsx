import { Select, Upload } from "antd"
import { UploadOutlined, ExclamationCircleOutlined } from "@ant-design/icons"

import useAction from "./hook"

const ApplyModal = () => {
  const { options, props, showConfirm, setShowConfirm } = useAction()

  const ApplyConfirm = () => {
    return (
      <div className="w-52  bg-gray-50 rounded-[0.4rem] border border-gray-200 absolute bottom-[4.5rem] -right-3 shadow-xl">
        <div className="flex flex-col w-full my-2">
          <div className="flex items-center ml-4">
            <ExclamationCircleOutlined />
            <div className="text-sm font-medium ml-2">申请报销</div>
          </div>
          <div className="text-sm ml-10 mt-3 font-normal">确定提交申请吗？</div>
          <div className="flex ml-auto mt-2">
            <div
              className="w-10 h-6 flex items-center justify-center border border-gray-300 rounded-[0.2rem]"
              onClick={() => {
                setShowConfirm(false)
              }}
            >
              <button className="text-xs">取消</button>
            </div>
            <div className="w-10 h-6 flex items-center justify-center border border-gray-300 bg-gray-600 mx-3 rounded-[0.2rem]">
              <button className="text-xs text-white font-medium">确定</button>
            </div>
          </div>
        </div>
        <div className="absolute right-10 border-8 border-t-gray-50 border-b-transparent border-l-transparent border-r-transparent"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-[30rem]">
      <div className="mx-10 relative">
        <div className="flex items-center w-full my-7">
          <div className="w-28 text-gray-900">申请人：</div>
          <input
            placeholder=""
            type="text"
            className="w-full h-8 border rounded-[0.4rem]"
          />
        </div>
        <div className="flex items-center w-full my-7">
          <div className="w-28 text-gray-900">报销类型：</div>
          <Select
            className="w-full"
            showSearch
            placeholder=""
            optionFilterProp="children"
            options={options}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          />
        </div>
        <div className="flex items-center w-full my-7">
          <Upload {...props}>
            <div className="flex items-center justify-center w-28 h-9  bg-gray-700 rounded-[0.4rem] cursor-pointer hover:bg-gray-800">
              <UploadOutlined className="text-white  mr-2" />
              <div className="text-white text-sm font-medium">上传发票</div>
            </div>
          </Upload>
        </div>
        <div className="flex flex-row-reverse mb-5">
          <div
            className="flex items-center justify-center w-20 h-10 border-2 border-gray-600 rounded-[0.4rem] cursor-pointer hover:bg-gray-50"
            onClick={() => {
              setShowConfirm(true)
            }}
          >
            <div className="text-sm font-medium text-gray-900">提交申请</div>
          </div>
        </div>
        {showConfirm === true && <ApplyConfirm />}
      </div>
    </div>
  )
}
export default ApplyModal
