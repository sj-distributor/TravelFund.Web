import { useEffect, useState } from "react";

import {
  TravelExpenseFormDto,
  AuditStatusType,
} from "../../services/dtos/apply-reimbursement";

import { GetExpenseList } from "../../services/api/reimbursement";

import {
  GetTravelApplicationData,
  GetInvoiceListData,
} from "../../services/api/approve";

import { TravelApplicationResponses } from "../../services/dtos/travel-application";

import { TravelInvoices } from "../../services/dtos/invoice";

import { PostAttachment } from "../../services/api/invoice";

const useAction = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [tableLoading, setTableLoading] = useState<boolean>(false);

  const [pageDto, setPageDto] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const [totalNum, setTotalNum] = useState<number>(1);

  const [applyDataList, setApplyDataList] = useState<TravelExpenseFormDto[]>(
    []
  );

  const [currentTravelRequestData, setCurrentTravelRequestData] = useState<
    TravelApplicationResponses[]
  >([]);

  const [currentInvoiceData, setCurrentInvoiceData] = useState<
    TravelInvoices[]
  >([]);

  const [currentExpenseData, setCurrentExpenseData] =
    useState<TravelExpenseFormDto>();

  const getApproveList = () => {
    setTableLoading(true);

    GetExpenseList({ PageIndex: pageDto.pageIndex, PageSize: pageDto.pageSize })
      .then((res) => {
        if (res) {
          const applyDataListResponse = res.travelExpenseForms.filter(
            (o) => o.manualStatus === AuditStatusType.Inprogress
          );

          setTotalNum(applyDataListResponse.length);

          setApplyDataList(applyDataListResponse);
        }
        setTableLoading(false);
      })
      .catch((err) => {
        setTableLoading(false);
      });
  };

  useEffect(() => {
    getApproveList();
  }, [pageDto.pageIndex]);

  const getCurrentTravelRequestData = (record: TravelExpenseFormDto) => {
    setIsModalOpen(true);

    setCurrentInvoiceData([]);

    setCurrentExpenseData(record);

    GetTravelApplicationData({
      TravelRequestFormId: record.travelRequestFormId,
    }).then((res) => {
      if (res) {
        const travelRequestForms = res.travelRequestForms.map((item) => ({
          ...item,
          userName: record.userName,
          type: record.type,
        }));
        setCurrentTravelRequestData(travelRequestForms);
      }
    });

    record.travelInvoiceIds.map((item) => {
      return GetInvoiceListData({
        TravelInvoiceIds: [item],
      }).then(async (res) => {
        if (res) {
          const newInvoiceData = res.travelInvoices[0];

          await PostAttachment({
            attachmentIds: newInvoiceData.attachmentIds,
          }).then((res) => {
            if (res) {
              newInvoiceData.fileUrl = res[0].fileUrl;

              setCurrentInvoiceData((prevData) => [
                ...prevData,
                newInvoiceData,
              ]);
            }
          });
        }
      });
    });
  };

  return {
    isModalOpen,
    setIsModalOpen,
    applyDataList,
    tableLoading,
    pageDto,
    setPageDto,
    totalNum,
    getCurrentTravelRequestData,
    currentTravelRequestData,
    currentInvoiceData,
    currentExpenseData,
    getApproveList,
  };
};
export default useAction;
