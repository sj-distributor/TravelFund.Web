import { useEffect, useState } from "react";
import { TravelExpenseFormDto } from "../../services/dtos/apply-reimbursement";
import { GetExpenseList } from "../../services/api/reimbursement";

const useAction = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [tableLoading, setTableLoading] = useState<boolean>(false);

  const applyReimbursementList: TravelExpenseFormDto[] = [];

  const [applyReimbursement, setApplyReimbursement] = useState<
    TravelExpenseFormDto[]
  >(applyReimbursementList);

  const [pageDto, setPageDto] = useState({
    PageIndex: 1,
    PageSize: 10,
    Count: 1,
  });

  const getExpenseList = () => {
    setTableLoading(true);

    GetExpenseList({ PageIndex: pageDto.PageIndex, PageSize: pageDto.PageSize })
      .then((res) => {
        if (res) {
          setPageDto((prev) => ({ ...prev, Count: res.count }));
          setApplyReimbursement(res.travelExpenseForms);
        }
        setTableLoading(false);
      })
      .catch((err) => {
        setTableLoading(false);
      });
  };

  useEffect(() => {
    getExpenseList();
  }, [pageDto.PageIndex, pageDto.PageSize]);

  return {
    applyReimbursement,
    isModalOpen,
    tableLoading,
    pageDto,
    setIsModalOpen,
    getExpenseList,
    setPageDto,
  };
};

export default useAction;
