import { useState } from "react";
import { ApplyDataProps } from "@/services/dtos/approve-management";

const useAction = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const applyData: ApplyDataProps[] = [
    {
      id: 1,
      applyHuman: "SARAH.1",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      action: "进行审批",
      travelDate: "2023/04/01",
      returnDate: "2023/04/20",
      claimLimit: "¥3500",
      invoiceLimit: "¥3000",
      realityLimit: "¥3000",
      aiOpinions:
        "根据人工智能/大数据风控系统检查，发票并无存在问题，相关资料符合申请规定。",
      aiStatus: "已通过",
      humanOpinions:
        "根据公司福利政策，SARAH.1享有旅游基金报销资格。资料审核通过，允许进行报销。",
      humanStatus: "未通过",
      invoice: [
        {
          pic: "../../../../assets/picture.png",
          invoiceType: "旅游基金-出行",
          invoiceMoney: "¥1000.00",
          invoiceDate: "2023/04/20",
        },
        {
          pic: "../../../../assets/picture.png",
          invoiceType: "旅游基金-出行",
          invoiceMoney: "¥1000.00",
          invoiceDate: "2023/04/20",
        },
        {
          pic: "../../../../assets/picture.png",
          invoiceType: "旅游基金-出行",
          invoiceMoney: "¥1000.00",
          invoiceDate: "2023/04/20",
        },
        {
          pic: "../../../../assets/picture.png",
          invoiceType: "旅游基金-出行",
          invoiceMoney: "¥1000.00",
          invoiceDate: "2023/04/20",
        },
      ],
    },
    {
      id: 2,
      applyHuman: "SARAH.2",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      action: "进行审批",
      travelDate: "2023/04/01",
      returnDate: "2023/04/20",
      claimLimit: "¥3500",
      invoiceLimit: "¥3000",
      realityLimit: "¥3000",
      aiOpinions:
        "根据人工智能/大数据风控系统检查，发票并无存在问题，相关资料符合申请规定。",
      aiStatus: "已通过",
      humanOpinions:
        "根据公司福利政策，SARAH.2享有旅游基金报销资格。资料审核通过，允许进行报销。",
      humanStatus: "未通过",
      invoice: [
        {
          pic: "../../../../assets/picture.png",
          invoiceType: "旅游基金-出行",
          invoiceMoney: "¥1000.00",
          invoiceDate: "2023/04/20",
        },
        {
          pic: "../../../../assets/picture.png",
          invoiceType: "旅游基金-出行",
          invoiceMoney: "¥1000.00",
          invoiceDate: "2023/04/20",
        },
      ],
    },
    {
      id: 3,
      applyHuman: "SARAH.3",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      action: "进行审批",
      travelDate: "2023/04/01",
      returnDate: "2023/04/20",
      claimLimit: "¥3500",
      invoiceLimit: "¥3000",
      realityLimit: "¥3000",
      aiOpinions:
        "根据人工智能/大数据风控系统检查，发票并无存在问题，相关资料符合申请规定。",
      aiStatus: "已通过",
      humanOpinions:
        "根据公司福利政策，SARAH.3享有旅游基金报销资格。资料审核通过，允许进行报销。",
      humanStatus: "未通过",
      invoice: [
        {
          pic: "../../../../assets/picture.png",
          invoiceType: "旅游基金-出行",
          invoiceMoney: "¥1000.00",
          invoiceDate: "2023/04/20",
        },
      ],
    },
    {
      id: 4,
      applyHuman: "SARAH.4",
      applyType: "旅游基金",
      applyDate: "2023/04/30",
      action: "进行审批",
      travelDate: "2023/04/01",
      returnDate: "2023/04/20",
      claimLimit: "¥3500",
      invoiceLimit: "¥3000",
      realityLimit: "¥3000",
      aiOpinions:
        "根据人工智能/大数据风控系统检查，发票并无存在问题，相关资料符合申请规定。",
      aiStatus: "已通过",
      humanOpinions:
        "根据公司福利政策，SARAH.4享有旅游基金报销资格。资料审核通过，允许进行报销。",
      humanStatus: "未通过",
      invoice: [
        {
          pic: "../../../../assets/picture.png",
          invoiceType: "旅游基金-出行",
          invoiceMoney: "¥1000.00",
          invoiceDate: "2023/04/20",
        },
      ],
    },
  ];

  const [currentListData, setCurrentListData] = useState<ApplyDataProps>(
    applyData[0]
  );

  return {
    isModalOpen,
    setIsModalOpen,
    applyData,
    currentListData,
    setCurrentListData,
  };
};
export default useAction;
