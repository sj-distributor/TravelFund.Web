import {
  GetMediaType,
  InvoiceList,
  GetAttachUrl,
  AddInvoiceProps,
  AttachmentIds,
  IAttachmentResponseDto,
  travelInvoiceIdsProps,
} from "../../dtos/invoice";

import { Post, Get } from "../http-client";

export const GetInvoiceList = async (params: GetMediaType) => {
  return await Get<InvoiceList>(
    `/api/TravelFund/invoice/list?PageIndex=${params.PageIndex}&PageSize=${params.PageSize}`
  );
};

export const PostUrlImg = async (data: FormData) => {
  return await Post<GetAttachUrl>(`/api/Attachment/upload`, data);
};

export const PostAddInvoice = async (data: AddInvoiceProps) => {
  return await Post(`/api/TravelFund/invoice/add`, data);
};

export const PostAttachment = async (data: AttachmentIds) => {
  return await Post<IAttachmentResponseDto[]>(
    "/api/Attachment/attachments",
    data
  );
};

export const PostDeleteInvoice = async (data: travelInvoiceIdsProps) => {
  return await Post<number>(`/api/TravelFund/invoices/delete`, data);
};
