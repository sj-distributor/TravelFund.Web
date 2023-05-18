import { Dispatch, SetStateAction } from "react";

export interface reimburseTypeOptions {
  value: string;
  label: string;
}

export interface ApplyModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  getExpenseList: () => void;
}
