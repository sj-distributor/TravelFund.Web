import { Post } from "../http-client"

export const PostInvoiceImg = async (data: FormData) =>
  await Post<any>(`/api/XXX`, data)
