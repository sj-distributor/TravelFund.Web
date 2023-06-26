import { useEffect, useRef, useState } from "react";
import { message } from "antd";

import {
  GetInvoiceList,
  PostAddInvoice,
  PostAttachment,
  PostDeleteInvoice,
} from "../../services/api/invoice";
import { TravelInvoices } from "../../services/dtos/invoice";

import { PostUrlImg } from "../../services/api/invoice";

const useAction = () => {
  const [pageDto, setPageDto] = useState({ pageIndex: 1, pageSize: 10 });

  const [invoiceList, setInvoiceList] = useState<TravelInvoices[]>([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [totalNum, setTotalNum] = useState<number>(1);

  const [tableLoading, setTableLoading] = useState<boolean>(true);

  const uploadIdRef = useRef({
    invoiceType: 0,
  });

  const getInvoiceList = () => {
    setTableLoading(true);

    GetInvoiceList({
      PageIndex: pageDto.pageIndex,
      PageSize: pageDto.pageSize,
    }).then(async (res) => {
      if (res) {
        setTotalNum(res.count);

        const travelInvoicesList = res.travelInvoices.filter(
          (o) => o.isDeleted === false
        );

        const list =
          travelInvoicesList.map((item) => ({
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
            setInvoiceList(
              travelInvoicesList.map((item) => ({
                ...item,
                fileUrl:
                  res[res.findIndex((el) => el.id === item.attachmentIds[0])]
                    ?.fileUrl ?? "",
              }))
            );
            setTableLoading(false);
          }
        });
      }
    });
  };

  const submitBtn = async (records: Record<string, any>) => {
    const formData = new FormData();

    formData.append("file", records.file);

    const attachmentData = await PostUrlImg(formData);

    if (attachmentData) {
      PostAddInvoice({
        travelFundInvoiceData: {
          attachmentIds: [attachmentData.id],
          invoiceType: uploadIdRef.current.invoiceType,
        },
      }).then((res) => {
        message.success("Successfully upload");
        setTableLoading(true);
        setIsModalOpen(false);
        getInvoiceList();
      });
    }
  };

  const deleteInvoice = (id: number) => {
    PostDeleteInvoice({
      travelInvoiceIds: [id],
    }).then((res) => {
      if (res) {
        message.success("Successfully delete");
        setTableLoading(true);
        getInvoiceList();
      } else {
        message.error("unsuccessfully delete");
      }
    });
  };

  useEffect(() => {
    getInvoiceList();
  }, [pageDto.pageIndex]);

  return {
    invoiceList,
    isModalOpen,
    setIsModalOpen,
    uploadIdRef,
    submitBtn,
    totalNum,
    pageDto,
    setPageDto,
    tableLoading,
    deleteInvoice,
  };
};
export default useAction;
