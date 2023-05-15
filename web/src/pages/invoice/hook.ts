import { useEffect, useRef, useState } from "react"

import {
  GetInvoiceList,
  PostAddInvoice,
  PostAttachment,
} from "../../services/api/invoice"
import { TravelInvoices } from "../../services/dtos/invoice"

const useAction = () => {
  const [dto, setDto] = useState({ pageIndex: 1, pageSize: 5 })

  const [invoiceList, setInvoiceList] = useState<TravelInvoices[]>([])

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const [totalNum, setTotalNum] = useState<number>(1)

  const uploadIdRef = useRef({
    invoiceType: 0,
    uploadId: 0,
  })

  const getInvoiceList = () => {
    GetInvoiceList({
      PageIndex: dto.pageIndex,
      PageSize: dto.pageSize,
    }).then(async (res) => {
      setTotalNum(res?.count)

      const travelInvoicesList = res.travelInvoices.filter(
        (o) => o.isDeleted === false
      )

      const list =
        travelInvoicesList.map((item) => ({
          id: item.id,
          attachmentId: item.attachmentIds[0],
        })) ?? []

      const attachmentIdsArr = list.filter(
        (obj, index, self) =>
          index === self.findIndex((o) => o.attachmentId === obj.attachmentId)
      )

      await PostAttachment({
        attachmentIds: attachmentIdsArr.map((item) => item.attachmentId),
      }).then((res) => {
        if (res) {
          setInvoiceList(
            travelInvoicesList.map((item) => ({
              ...item,
              fileUrl:
                res[res.findIndex((el) => el.id === item.attachmentIds[0])]
                  .fileUrl,
            }))
          )
        }
      })
    })
  }

  const submitBtn = () => {
    PostAddInvoice({
      travelFundInvoiceData: {
        attachmentIds: [uploadIdRef.current.uploadId],
        invoiceType: uploadIdRef.current.invoiceType,
      },
    }).then((res) => {
      if (res) {
        setIsModalOpen(false)
        getInvoiceList()
      }
    })
  }

  useEffect(() => {
    getInvoiceList()
  }, [dto.pageIndex])

  return {
    invoiceList,
    isModalOpen,
    setIsModalOpen,
    uploadIdRef,
    submitBtn,
    totalNum,
    dto,
    setDto,
  }
}
export default useAction
