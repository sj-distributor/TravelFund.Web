import { Input, Select } from "antd"

import useAction from "./hook"

const ApplyModal = () => {
  const { reimburseTypeSelect, uploadFile, uploadImg } = useAction()

  return (
    <div className="flex flex-col w-[30rem]">
      <div className="mx-10 relative">
        <div className="flex items-center w-full my-7">
          <div className="w-28 text-gray-900">申请人：</div>
          <Input></Input>
        </div>
        <div className="flex items-center w-full my-7">
          <div className="w-28 text-gray-900">报销类型：</div>
          <Select
            className="w-full"
            showSearch
            placeholder=""
            optionFilterProp="children"
            options={reimburseTypeSelect}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          />
        </div>
        <div className="flex items-center w-full my-7">
          <input
            type="file"
            className="cursor-pointer"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              !!e.target.files && uploadFile(e)
            }
          />
        </div>
        <div>
          {(uploadImg ?? "") !== "" ? (
            <div>
              <img src={uploadImg} alt="" />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}
export default ApplyModal
