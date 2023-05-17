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
  const [dto, setDto] = useState({
    PageIndex: 1,
    PageSize: 10,
    count: 1,
  });

  const getExpenseList = () => {
    setTableLoading(true);
    GetExpenseList({ PageIndex: dto.PageIndex, PageSize: dto.PageSize })
      .then((res) => {
        if (res) {
          setDto((prev) => ({ ...prev, count: res.count }));
          setApplyReimbursement(res.travelExpenseForms);
        }
        setTableLoading(false);
      })
      .catch((err) => {
        setTableLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getExpenseList();
  }, [dto.PageIndex, dto.PageSize]);

  return {
    applyReimbursement,
    isModalOpen,
    tableLoading,
    setIsModalOpen,
    getExpenseList,
    dto,
    setDto,
  };
};

export default useAction;
