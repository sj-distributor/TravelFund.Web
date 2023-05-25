import { useEffect, useRef, useState } from "react";
import {
  GetTravelApplicationList,
  PostAddTravelApplication,
} from "../../services/api/travel-application";
import { TravelApplicationResponses } from "../../services/dtos/travel-application";

import { message } from "antd";

const useAction = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [tableLoading, setTableLoading] = useState<boolean>(true);

  const [dto, setDto] = useState<{ pageIndex: number; pageSize: number }>({
    pageIndex: 1,
    pageSize: 10,
  });

  const [totalNum, setTotalNum] = useState<number>(1);

  const [applicateList, setApplicateList] =
    useState<TravelApplicationResponses[]>();

  const travelApplicationRef = useRef({
    customPrice: 0,
    isGroup: true,
    returnDate: "",
    travelDate: "",
  });

  const getTravelApplicationList = () => {
    GetTravelApplicationList({
      PageIndex: dto.pageIndex,
      PageSize: dto.pageSize,
    }).then((res) => {
      setTotalNum(res?.count!);
      const travelRequestForms = res?.travelRequestForms;
      setApplicateList(travelRequestForms);
      setTableLoading(false);
    });
  };

  const submitTravelApplication = async () => {
    const applicateList = travelApplicationRef.current;
    await PostAddTravelApplication({
      CustomPrice: applicateList.customPrice,
      IsGroup: applicateList.isGroup,
      TravelDate: applicateList.travelDate,
      ReturnDate: applicateList.returnDate,
    }).then((res) => {
      message.success("Successfully applied");
      setIsModalOpen(false);
      getTravelApplicationList();
    });
  };

  useEffect(() => {
    getTravelApplicationList();
  }, [dto.pageIndex]);

  return {
    isModalOpen,
    setIsModalOpen,
    applicateList,
    travelApplicationRef,
    submitTravelApplication,
    totalNum,
    dto,
    setDto,
    tableLoading,
  };
};
export default useAction;
