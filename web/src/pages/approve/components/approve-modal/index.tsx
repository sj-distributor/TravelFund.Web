import useAction from "./hook";

import {
  ApplyDataProps,
  ApproveModalListProps,
  Invoice,
} from "@/services/dtos/approve-management";

const ApprovedModal = (props: { currentListData: ApplyDataProps }) => {
  let currentListData = props.currentListData;

  const { approveModalList } = useAction(currentListData);

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
              );
            })}
          </div>
        );
      case "附件":
        return (
          <div className="max-h-60 overflow-y-scroll">
            {item.invoice?.map((item: Invoice, index: number) => {
              return (
                <div className="flex w-2/3 items-center m-5" key={index}>
                  <img
                    className="w-44 h-20"
                    src={require("../../../../assets/picture.png")}
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
              );
            })}
          </div>
        );
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
        );
      case "人工审批意见":
        return (
          <div className="relative">
            <div className="flex justify-center items-center h-10 ml-4">
              <div className="text-gray-900 text-sm w-full">
                {item.opinions?.contents}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {approveModalList.map((item, index) => {
        return (
          <>
            <div className="m-3 w-[42rem]" key={index}>
              <div className="mb-2 font-semibold">{item.title}</div>
              {approveModalTitle(item)}
            </div>
            <div className="h-px bg-gray-200 " />
          </>
        );
      })}
    </>
  );
};

export default ApprovedModal;
