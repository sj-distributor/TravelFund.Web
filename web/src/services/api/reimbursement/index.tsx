import {
  AddExpenseResponse,
  GetExpenseListDto,
  GetExpenseListResponse,
  PostAddExpenseDto,
} from "../../dtos/apply-reimbursement";
import { Post, Get } from "../http-client";

export const PostInvoiceImg = async (data: FormData) =>
  await Post<any>(`/api/XXX`, data);

export const GetExpenseList = async (params: GetExpenseListDto) => {
  return await Get<GetExpenseListResponse>(
    `/api/TravelFund/expense/form/list?PageIndex=${params.PageIndex}&PageSize=${params.PageSize}`
  );
};

export const PostAddExpense = async (params: PostAddExpenseDto) => {
  return await Post<AddExpenseResponse>(
    `/api/TravelFund/expense/form/add`,
    params
  );
};
