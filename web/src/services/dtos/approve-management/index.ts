export interface ModalBoxRef {
  open: () => void;
  close: () => void;
}

export interface IApproveModalListProps {
  title: string;
  applyMessage?: IApplyMessageProps[];
  invoice?: IInvoiceListProps[];
  expenseAiStatus?: number;
  manualOpinionContent?: string;
}

export interface IApplyMessageProps {
  applicationLabel: string;
  applicationContent?: string | number;
}

export interface IInvoiceListProps {
  id: number;
  userId: number;
  type: number;
  purchasingType: number;
  aiStatus: number;
  manualStatus: number;
  invoicePrice: number;
  createdDate: string;
  isDeleted: boolean;
  attachmentIds: number[];
  fileUrl?: string;
}

export interface IApproveExpenseProps {
  travelExpenseFormId: number;
  manualStatus: number;
  rejectedReason: string;
}

export interface IApproveExpenseResponse {
  id: number;
  userId: number;
  travelRequestFormId: number;
  travelInvoiceIds: number[];
  aiStatus: number;
  manualStatus: number;
  type: number;
  title: string;
  userName: string;
  createdDate: string;
  approvedDate: string;
}
