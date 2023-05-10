import { useEffect, useRef, useState } from "react"
import { MediaPage } from "../../services/dtos/travelApplication"
import { ApplicateList } from "./props"
import {
  GetTravelApplicationList,
  PostAddTravelApplication,
} from "../../services/api/travelApplication"
import moment from "moment"
import { message } from "antd"

const useAction = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const [pageIndex, setPageIndex] = useState<number>(1)

  const [totalNum, setTotalNum] = useState<number>(1)

  const [applicateList, setApplicateList] = useState<ApplicateList[]>()

  const travelApplicationRef = useRef({
    customPrice: 0,
    isGroup: true,
    returnDate: "",
    travelDate: "",
  })

  const getTravelApplicationList = () => {
    GetTravelApplicationList({
      PageIndex: pageIndex,
      PageSize: MediaPage.PageSize,
    }).then((res) => {
      if ((res ?? "") !== "") {
        setTotalNum(res?.count!)

        const travelRequestForms: any = res?.travelRequestForms
        travelRequestForms?.forEach((item: any) => {
          item.isGroup = item.isGroup === true ? "是" : "否"
          item.travelDate = moment(item.travelDate).format("YYYY-MM-DD")
          item.returnDate = moment(item.returnDate).format("YYYY-MM-DD")
        })
        setApplicateList(travelRequestForms)
      }
    })
  }

  const submitTravelApplication = async () => {
    const applicateList = travelApplicationRef.current
    await PostAddTravelApplication({
      CustomPrice: applicateList.customPrice,
      IsGroup: applicateList.isGroup,
      TravelDate: applicateList.travelDate,
      ReturnDate: applicateList.returnDate,
    }).then((res) => {
      message.success("出行申请成功！")
      setIsModalOpen(false)
      getTravelApplicationList()
    })
  }

  useEffect(() => {
    getTravelApplicationList()
  }, [pageIndex])

  return {
    isModalOpen,
    setIsModalOpen,
    applicateList,
    travelApplicationRef,
    submitTravelApplication,
    totalNum,
    setPageIndex,
  }
}
export default useAction
