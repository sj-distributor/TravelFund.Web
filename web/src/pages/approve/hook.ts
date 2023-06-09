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

    const travelInvoiceIds = record.travelInvoiceIds.map((item) => {
      return "TravelInvoiceIds=" + item;
    });
    GetInvoiceListData({
      TravelInvoiceIds: travelInvoiceIds.join("&"),
    }).then(async (res) => {
      if (res) {
        const travelInvoices = res.travelInvoices;

        const list =
          travelInvoices.map((item) => ({
            id: item.id,
            attachmentId: item.attachmentIds[0],
          })) ?? [];

        const attachmentIdsArr = list.filter(
          (obj, index, self) =>
            index === self.findIndex((o) => o.attachmentId === obj.attachmentId)
        );

        await PostAttachment({
          attachmentIds: attachmentIdsArr.map((item) => item.attachmentId),
        }).then((res) => {
          if (res) {
            setCurrentInvoiceData(
              travelInvoices.map((item) => ({
                ...item,
                fileUrl:
                  res[res.findIndex((el) => el.id === item.attachmentIds[0])]
                    ?.fileUrl ?? "",
              }))
            );
          }
        });
      }
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
