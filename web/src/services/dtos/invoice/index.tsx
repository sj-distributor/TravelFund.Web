import { NumberLiteralType } from "typescript";

export interface GetMediaType {
  PageIndex: number;
  PageSize: number;
}

export interface InvoiceList {
  count: number;
  travelInvoices: TravelInvoices[];
}

export interface TravelInvoices {
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

export interface TableListProps {
  handleDeleteInvoice: (record: TravelInvoices) => void;
  invoiceList: TravelInvoices[];
  tableLoading: boolean;
}

export interface GetAttachUrl {
  id: number;
  uuid: string;
  createDate: string;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  filePath: string;
  title?: string;
}

export enum Type {
  TourismFund = 10,
  TravelExpenses = 20,
  PhysicalExamination = 30,
}

export enum PurchasingType {
  General = 0,
  Traffic = 10,
  Dining = 20,
  Ticket = 30,
}

export interface AttachmentIds {
  attachmentIds: number[];
  invoiceType?: number;
}

export interface AddInvoiceProps {
  travelFundInvoiceData: AttachmentIds;
}

export interface IAttachmentResponseDto {
  title: string;
  createdDate: string;
  fileName: string;
  filePath: string;
  fileSize: number;
  fileUrl: string;
  id: number;
  uuid: string;
  mediaId: NumberLiteralType;
}

export interface travelInvoiceIdsProps {
  travelInvoiceIds: number[];
}
