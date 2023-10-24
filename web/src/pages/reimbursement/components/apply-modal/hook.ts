import { SetStateAction, useEffect, useState } from "react";
import { ApplyModalProps, ChoiceTypeEnum, reimburseTypeOptions } from "./props";
import { PostAddExpense } from "../../../../services/api/reimbursement";
import { GetTravelApplicationList } from "../../../../services/api/travel-application";
import { GetInvoiceList } from "../../../../services/api/invoice";
import { TravelInvoices } from "../../../../services/dtos/invoice";
import { TravelApplicationResponses } from "../../../../services/dtos/travel-application";
import {
  addExpenseDataType,
  PostAddExpenseDto,
  TravelExpenseFormType,
  SelectValue,
} from "../../../../services/dtos/apply-reimbursement";
import { Form, UploadFile, message } from "antd";
import cascaderOptions, { DivisionUtil } from "@pansy/china-division";

const useAction = (props: ApplyModalProps) => {
  const [form] = Form.useForm();

  const { setIsModalOpen, getExpenseList } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const [familyReimbursement, setFamilyReimbursement] = useState<string>("");

  const [addExpenseData, setAddExpenseData] = useState<addExpenseDataType>({
    title: "",
    type: TravelExpenseFormType.TourismFund,
    travelRequestFormId: 0,
    travelInvoiceIds: [],
  });

  const reimburseTypeSelect: reimburseTypeOptions[] = [
    {
      value: TravelExpenseFormType.TourismFund + "",
      label: "旅游基金",
    },
  ];

  const [invoiceListDto, setInvoiceListDto] = useState({
    PageIndex: 1,
    PageSize: 10,
    Count: 1,
  });

  const [travelRequestListDto, setTravelRequestListDto] = useState({
    PageIndex: 1,
    PageSize: 10,
    Count: 1,
  });

  const [invoiceList, setInvoiceList] = useState<SelectValue[]>([]);

  const [travelRequestList, setTravelRequestList] = useState<SelectValue[]>([]);

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const divisionUtil = new DivisionUtil(cascaderOptions);

  let locationOptions = divisionUtil.getProvinces();

  locationOptions = locationOptions.map((n) => {
    const cities = divisionUtil.getChildrenByCode(n.value);

    return {
      ...n,
      children: cities,
    };
  });

  const getInvoiceList = () => {
    GetInvoiceList({
      PageIndex: invoiceListDto.PageIndex,
      PageSize: invoiceListDto.PageSize,
    })
      .then((res) => {
        if (res && res.travelInvoices) {
          const travelInvoices = res.travelInvoices;
          const data = travelInvoices.map((item: TravelInvoices) => ({
            value: item.id,
            label: `发票ID:${item.id} `,
          }));
          setInvoiceList((prve) => [...prve, ...data]);
          setInvoiceListDto((prve) => ({ ...prve, Count: res.count }));
        }
      })
      .catch((err) => {
        message.error("Failed to obtain data");
      });
  };

  const getTravelRequestList = () => {
    GetTravelApplicationList({
      PageIndex: travelRequestListDto.PageIndex,
      PageSize: travelRequestListDto.PageSize,
    })
      .then((res) => {
        if (res) {
          const travelRequestForms = res?.travelRequestForms;
          const data = travelRequestForms.map(
            (item: TravelApplicationResponses) => ({
              value: item.id,
              label: `用户ID:${item.userId} 申请表单ID:${item.id}`,
            })
          );
          setTravelRequestList((prve) => [...prve, ...data]);
          setTravelRequestListDto((prve) => ({ ...prve, Count: res.count }));
        }
      })
      .catch((err) => {
        message.error("Failed to obtain data");
      });
  };

  const handleAddExpense = () => {
    const data: PostAddExpenseDto = {
      travelExpenseFormData: addExpenseData,
    };
    setLoading(true);

    PostAddExpense(data)
      .then((res) => {
        setIsModalOpen(false);
        message.success("Successfully applied");
        getExpenseList();
        setAddExpenseData({
          title: "",
          type: TravelExpenseFormType.TourismFund,
          travelRequestFormId: 0,
          travelInvoiceIds: [],
        });
        setLoading(false);
      })
      .catch((err) => {
        message.error("Unsuccessful");
        setAddExpenseData({
          title: "",
          type: TravelExpenseFormType.TourismFund,
          travelRequestFormId: 0,
          travelInvoiceIds: [],
        });
        setLoading(false);
      });
  };

  const handleSelectScroll = async (
    e: React.UIEvent<HTMLDivElement, UIEvent>,
    type: string
  ) => {
    const { currentTarget } = e;
    const parentClientHeight = currentTarget.firstElementChild?.clientHeight;
    const clientHeight = currentTarget.clientHeight + currentTarget.scrollTop;

    if (parentClientHeight) {
      if (
        clientHeight + 3 > parentClientHeight &&
        (type === "travelInvoice"
          ? invoiceListDto.Count
          : travelRequestListDto.Count) >
          (type === "travelInvoice"
            ? invoiceList.length
            : travelRequestList.length)
      ) {
        type === "travelInvoice" &&
          setInvoiceListDto((prve) => ({
            ...prve,
            PageIndex: prve.PageIndex + 1,
          }));
        type === "requestFrom" &&
          setTravelRequestListDto((prve) => ({
            ...prve,
            PageIndex: prve.PageIndex + 1,
          }));
      }
    }
  };

  useEffect(() => {
    getInvoiceList();
  }, [invoiceListDto.PageIndex, invoiceListDto.PageSize]);

  useEffect(() => {
    getTravelRequestList();
  }, [travelRequestListDto.PageIndex, travelRequestListDto.PageSize]);

  return {
    reimburseTypeSelect,
    addExpenseData,
    loading,
    handleAddExpense,
    setAddExpenseData,
    invoiceList,
    travelRequestList,
    handleSelectScroll,
    locationOptions,
    form,
    familyReimbursement,
    setFamilyReimbursement,
    fileList,
    setFileList,
  };
};

export default useAction;
