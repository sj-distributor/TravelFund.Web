export interface ApplyDataProps {
  id: number;
  applyHuman: string;
  applyType: string;
  applyDate: string;
  action: string;
  travelDate: string;
  returnDate: string;
  claimLimit: string;
  invoiceLimit: string;
  realityLimit: string;
  aiOpinions: string;
  aiStatus: string;
  humanOpinions: string;
  humanStatus: string;
  invoice: Invoice[];
}

export interface Invoice {
  pic: string;
  invoiceType: string;
  invoiceMoney: string;
  invoiceDate: string;
}

export interface ModalBoxRef {
  open: () => void;
  close: () => void;
}

export interface ApproveModalListProps {
  title: string;
  applyMessage?: ApplyMessageProps[];
  invoice?: Invoice[];
  opinions?: Opinions;
}

export interface Opinions {
  contents: string;
  status?: string;
}

export interface ApplyMessageProps {
  applicationLabel: string;
  applicationContent: string;
}

export interface TableListProps {
  handleAddOpen: (record: ApplyDataProps) => void;
  applyData: ApplyDataProps[];
}
