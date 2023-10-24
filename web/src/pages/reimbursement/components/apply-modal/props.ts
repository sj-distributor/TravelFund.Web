import { Dispatch, SetStateAction } from "react";

export enum ChoiceTypeEnum {
  Yes,
  No,
}

export interface reimburseTypeOptions {
  value: string;
  label: string;
}

export interface ApplyModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  getExpenseList: () => void;
}
