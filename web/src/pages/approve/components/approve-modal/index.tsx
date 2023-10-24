import dayjs from "dayjs";

import { Button, Popconfirm, Image, Input, Radio } from "antd";

import useAction from "./hook";

import { TravelApplicationResponses } from "../../../../services/dtos/travel-application";

import {
  IApproveModalListProps,
  IApplyMessageProps,
  IInvoiceListProps,
} from "../../../../services/dtos/approve-management";

import {
  TravelInvoices,
  TravelInvoiceType,
  PurchasingType,
} from "../../../../services/dtos/invoice";

import {
  AuditStatusType,
  TravelExpenseFormDto,
} from "../../../../services/dtos/apply-reimbursement";

export const ApprovedModal = (props: {
  currentTravelRequestData: TravelApplicationResponses[];
  currentInvoiceData: TravelInvoices[];
  currentExpenseData: TravelExpenseFormDto;
  setIsModalOpen: (boolean: boolean) => void;
  getApproveList: () => void;
}) => {
  const {
    approveModalList,
    handleApproveExpense,
    setRejectedReason,
    manualStatus,
    setManualStatus,
    approvalTitleList,
  } = useAction(props);

  const ExpenseTypeContent = (type: number) => {
    switch (type) {
      case TravelInvoiceType.TourismFund:
        return <>旅游基金</>;

      case TravelInvoiceType.TravelExpenses:
        return <>差旅费用</>;

      case TravelInvoiceType.PhysicalExamination:
        return <>体检费用</>;
    }
  };

  const PurchasingTypeContent = (purchasingType: number) => {
    switch (purchasingType) {
      case PurchasingType.General:
        return <>通用</>;

      case PurchasingType.Traffic:
        return <>出行</>;

      case PurchasingType.Dining:
        return <>餐饮</>;

      case PurchasingType.Ticket:
        return <>门票</>;
    }
  };

  const AiOpinionsContent = (expenseAiStatus: number) => {
    const ReturnAiOpinions = (content: string, status: string) => {
      return (
        <div>
          <div className="flex justify-center items-center h-10 ml-4">
            <div className="text-gray-900 text-sm w-full">{content}</div>
          </div>
          <div className="flex">
            <div className="text-gray-900 text-sm ml-auto mr-4">
              状态：{status}
            </div>
          </div>
          <div className="h-px bg-gray-200 mt-4" />
        </div>
      );
    };

    switch (expenseAiStatus) {
      case AuditStatusType.Pending:
        return ReturnAiOpinions("等待审核中...", "待审核中");

      case AuditStatusType.Inprogress:
        return ReturnAiOpinions("正在审核中...", "审核中");

      case AuditStatusType.Rejected:
        return ReturnAiOpinions(
          "根据人工智能/大数据风控系统检查，该申请不通过",
          "已拒绝"
        );

      case AuditStatusType.Approved:
        return ReturnAiOpinions(
          "根据人工智能/大数据风控系统检查，发票并无存在问题，相关资料符合申请规定",
          "已通过"
        );
    }
  };

  const approveModalTitle = (item: IApproveModalListProps) => {
    switch (item.title) {
      case "申请信息":
        return (
          <>
            <div className="flex flex-col flex-wrap h-40 ml-10">
              {item.applyMessage?.map(
                (applyItem: IApplyMessageProps, index: number) => {
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
                }
              )}
            </div>
            <div className="h-px bg-gray-200 " />
          </>
        );

      case "附件":
        return (
          <>
            <div className="max-h-36 overflow-y-scroll">
              {item.invoice?.map((item: IInvoiceListProps, index: number) => {
                return (
                  <div
                    className="flex w-2/3 items-center ml-16 mb-4"
                    key={index}
                  >
                    <Image height={65} width={135} src={item.fileUrl} />
                    <div className="mx-8">
                      <div className="flex h-5">
                        <div className="text-gray-900 text-sm ">类型：</div>
                        <div className="text-gray-900 text-sm ">
                          {ExpenseTypeContent(item.type)}-
                          {PurchasingTypeContent(item.purchasingType)}
                        </div>
                      </div>
                      <div className="flex h-5">
                        <div className="text-gray-900 text-sm ">金额：</div>
                        <div className="text-gray-900 text-sm ">
                          ¥{item.invoicePrice ?? 0}
                        </div>
                      </div>
                      <div className="flex h-5">
                        <div className="text-gray-900 text-sm ">日期：</div>
                        <div className="text-gray-900 text-sm ">
                          {dayjs(item.createdDate).format("YYYY-MM-DD")}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="h-px bg-gray-200 mt-4" />
          </>
        );

      case "AI审批意见":
        return AiOpinionsContent(item.expenseAiStatus!);

      case "人工审批意见":
        return (
          <div>
            {approvalTitleList.map((title, index) => (
              <div key={index}>
                <div className="mb-2 font-semibold">{title}</div>
                <div className="relative flex flex-col px-4">
                  <Radio.Group
                    defaultValue={AuditStatusType.Approved}
                    buttonStyle="solid"
                    className="mt-3"
                    onChange={(e) => setManualStatus(e.target.value)}
                  >
                    <Radio value={AuditStatusType.Approved}>通过</Radio>
                    <Radio value={AuditStatusType.Rejected}>拒绝</Radio>
                  </Radio.Group>
                  <div className="mt-3">
                    {manualStatus === AuditStatusType.Approved ? (
                      <div className="border rounded-md p-3">
                        {item.manualOpinionContent}
                      </div>
                    ) : (
                      <Input.TextArea
                        rows={3}
                        placeholder="请输入拒绝理由..."
                        onChange={(e) => setRejectedReason(e.target.value)}
                      />
                    )}
                  </div>
                  <div className="mt-5 flex ml-auto">
                    <Popconfirm
                      title="审批"
                      description={() =>
                        `确定${
                          manualStatus === AuditStatusType.Approved
                            ? "通过"
                            : "拒绝通过"
                        }该申请单吗？`
                      }
                      onConfirm={() => handleApproveExpense()}
                      okText="确定"
                      cancelText="取消"
                      cancelButtonProps={{
                        style: {
                          color: "black",
                          borderColor: "rgb(229 231 235)",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <Button className="bg-gray-700 text-white font-medium mt-[0.5rem] mr-[1rem]">
                提交
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {approveModalList.map((item: IApproveModalListProps, index: number) => {
        return (
          <div className="mt-5 ml-5 w-[42rem]" key={index}>
            {item.title !== "人工审批意见" && (
              <div className="mb-2 font-semibold">{item.title}</div>
            )}
            {approveModalTitle(item)}
          </div>
        );
      })}
    </>
  );
};

export default ApprovedModal;
