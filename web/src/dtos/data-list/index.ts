import { ReactNode } from "react";

export interface SubscribeDataType {
  key: string;
  subscribeName: string;
  subscribeType: string;
  subscribeDate: string;
}

export interface InvoicesDataType {
  key: string;
  uploadDate?: string;
  invoice?: string[] | [];
  invoiceType?: string;
  isEffective?: boolean;
  isShowImg?: boolean;
}

export interface PropsType {
  navigation?: Array<string>;
  dataSource?: Array<SubscribeDataType | InvoicesDataType>;
  columns?: Array<any>;
  myDataTitle?: ReactNode | "";
  allListTitle?: ReactNode | "";
}
