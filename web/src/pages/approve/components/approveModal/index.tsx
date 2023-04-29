import useAction from "./hook"

import { ExclamationCircleOutlined } from "@ant-design/icons"

import {
  ApplyDataProps,
  ApproveModalListProps,
  Invoice,
} from "@/services/dtos/approveManagement"

const ApprovedModal = (props: { currentListData: ApplyDataProps }) => {
  let currentListData = props.currentListData

  const { approveModalList, showConfirm, setShowConfirm } =
    useAction(currentListData)

  const ApproveConfirm = () => {
    return (
      <div className="w-52 bg-gray-50 rounded-[0.4rem] border border-gray-200 absolute bottom-14 right-0 shadow-xl ">
        <div className="flex flex-col w-full my-2">
          <div className="ml-4 flex items-center">
            <ExclamationCircleOutlined />
            <div className="text-sm font-medium ml-2">通过审核</div>
          </div>
          <div className="text-sm ml-10 mt-3 font-normal">
            确定通过该审核吗？
          </div>
          <div className="flex ml-auto mt-2">
            <div
              className="w-10 h-7 flex items-center justify-center border border-gray-300 rounded-[0.2rem]"
              onClick={() => setShowConfirm(false)}
            >
              <button className="text-sm ">取消</button>
            </div>
            <div className="w-10 h-7 flex items-center justify-center border border-gray-300 bg-gray-600 mx-3 rounded-[0.2rem]">
              <button className="text-sm text-white font-medium">确定</button>
            </div>
          </div>
        </div>
        <div className="absolute right-12 border-8 border-t-gray-50 border-b-transparent border-l-transparent border-r-transparent"></div>
      </div>
    )
  }

  const approveModalTitle = (item: ApproveModalListProps) => {
    switch (item.title) {
      case "申请信息":
        return (
          <div className="flex flex-col flex-wrap h-32 ml-10">
            {item.applyMessage?.map((applyItem, index) => {
              return (
                <div className="flex h-8 items-center" key={index}>
                  <div className="text-gray-900 text-sm ">
                    {applyItem.applicationLabel}
                  </div>
                  <div className="text-gray-900 text-sm ">
                    {applyItem.applicationContent}
                  </div>
                </div>
              )
            })}
          </div>
        )
      case "附件":
        return (
          <div className="max-h-60 overflow-y-scroll">
            {item.invoice?.map((item: Invoice, index: number) => {
              return (
                <div className="flex w-2/3 items-center m-5" key={index}>
                  <img
                    className="w-44 h-20"
                    src={require("../../../../temPic/picture.png")}
                    alt=""
                  />
                  <div className="mx-8">
                    <div className="flex h-5">
                      <div className="text-gray-900 text-sm ">类型：</div>
                      <div className="text-gray-900 text-sm ">
                        {item.invoiceType}
                      </div>
                    </div>
                    <div className="flex h-5">
                      <div className="text-gray-900 text-sm ">金额：</div>
                      <div className="text-gray-900 text-sm ">
                        {item.invoiceMoney}
                      </div>
                    </div>
                    <div className="flex h-5">
                      <div className="text-gray-900 text-sm ">日期：</div>
                      <div className="text-gray-900 text-sm ">
                        {item.invoiceDate}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      case "AI审批意见":
        return (
          <div>
            <div className="flex justify-center items-center h-10 ml-4">
              <div className="text-gray-900 text-sm w-full">
                {item.opinions?.contents}
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-900 text-sm ml-auto mr-4">
                状态：{item.opinions?.status}
              </div>
            </div>
          </div>
        )
      case "人工审批意见":
        return (
          <div className="relative">
            <div className="flex justify-center items-center h-10 ml-4">
              <div className="text-gray-900 text-sm w-full">
                {item.opinions?.contents}
              </div>
            </div>
            <div className="flex">
              <div
                className="flex items-center justify-center w-20 h-8 mb-3 border-2 border-gray-700 rounded-lg ml-auto mr-4 cursor-pointer hover:bg-gray-50"
                onClick={() => {
                  setShowConfirm(true)
                }}
              >
                <div className="text-gray-900">通过</div>
              </div>
            </div>
            {showConfirm === true && <ApproveConfirm />}
          </div>
        )
    }
  }

  return (
    <>
      {approveModalList.map((item, index) => {
        return (
          <>
            <div className="m-3 w-[42rem]" key={index}>
              <div className="mb-2 font-semibold">{item.title}</div>
              {approveModalTitle(item)}
            </div>
            <div className="h-px bg-gray-200 "></div>
          </>
        )
      })}
    </>
  )
}

export default ApprovedModal
