export interface ApplyReimbursementProps {
  id: number;
  applyName: string;
  applyType: string;
  applyDate: string;
  applyProgress: string;
}

export interface GetExpenseListDto {
  PageIndex: number;
  PageSize: number;
}

export interface PostAddExpenseDto {
  travelExpenseFormData: {
    title: string;
    type: number;
    travelRequestFormId: number;
    travelInvoiceIds: number[];
  };
}

export interface TravelExpenseFormDto {
  id: number;
  userId: number;
  aiStatus: number; //Enum:[ 10, 20, 40, 80 ]
  manualStatus: number; //Enum:[ 10, 20, 40, 80 ]
  type: number; //Enum:[10]
  title: string;
  createdDate: string;
  approvedDate: string;
}

export interface GetTravelExpenseResponseData {
  count: number;
  travelExpenseForms: TravelExpenseFormDto[];
}

export interface GetExpenseListResponse {
  count: number;
  travelExpenseForms: TravelExpenseFormDto[];
}

export interface AddExpenseResponse {
  msg: string;
  code: number;
}

export interface UserValue {
  label: string;
  value: string;
}

export interface addExpenseDataType {
  title: string;
  type: number;
  travelRequestFormId: UserValue[];
  travelInvoiceIds: UserValue[];
}

export enum TravelExpenseFormType {
  TourismFund = 10,
}

export enum AuditStatusType {
  Pending = 10,
  Inprogress = 20,
  Rejected = 40,
  Approved = 80,
}
