import { TravelApplicationList } from "../../dtos/travel-application";

import { InvoiceList } from "../../dtos/invoice";

import { Get, Post } from "../http-client";

import {
  IApproveExpenseProps,
  IApproveExpenseResponse,
} from "../../dtos/approve-management";

export const GetTravelApplicationData = async (params: {
  TravelRequestFormId: number;
}) => {
  return await Get<TravelApplicationList>(
    `/api/TravelFund/request/form/list?TravelRequestFormId=${params.TravelRequestFormId}`
  );
};

export const GetInvoiceListData = async (params: {
  TravelInvoiceIds: number[];
}) => {
  return await Get<InvoiceList>(
    `/api/TravelFund/invoice/list?TravelInvoiceIds=${params.TravelInvoiceIds}`
  );
};

export const PostApproveExpense = async (data: IApproveExpenseProps) => {
  return await Post<IApproveExpenseResponse>(
    `/api/TravelFund/expense/form/approve`,
    data
  );
};
