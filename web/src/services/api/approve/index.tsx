import { TravelApplicationList } from "../../dtos/travel-application";

import {
  GetExpenseListDto,
  GetExpenseListResponse,
} from "../../dtos/apply-reimbursement";

import { InvoiceList } from "../../dtos/invoice";

import { Get, Post } from "../http-client";

import {
  IApproveExpenseProps,
  IApproveExpenseResponse,
} from "../../dtos/approve-management";

export const GetApproveList = async (params: GetExpenseListDto) => {
  return await Get<GetExpenseListResponse>(
    `/api/TravelFund/expense/form/list?PageIndex=${params.PageIndex}&PageSize=${params.PageSize}&ManualStatus=${params.ManualStatus}`
  );
};

export const GetTravelApplicationData = async (params: {
  TravelRequestFormId: number;
}) => {
  return await Get<TravelApplicationList>(
    `/api/TravelFund/request/form/list?TravelRequestFormId=${params.TravelRequestFormId}`
  );
};

export const GetInvoiceListData = async (params: {
  TravelInvoiceIds: string;
}) => {
  return await Get<InvoiceList>(
    `/api/TravelFund/invoice/list?${params.TravelInvoiceIds}`
  );
};

export const PostApproveExpense = async (data: IApproveExpenseProps) => {
  return await Post<IApproveExpenseResponse>(
    `/api/TravelFund/expense/form/approve`,
    data
  );
};
