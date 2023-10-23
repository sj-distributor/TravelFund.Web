import Table, { ColumnsType } from "antd/es/table";
import { filterArray } from "../../../../utils/table/fliter-table";

import { ReportDataProps } from "@/services/dtos/report";

const TableList = ({ reportData }: { reportData: ReportDataProps[] }) => {
  const columnsTodoList: ColumnsType<ReportDataProps> = [
    {
      title: "申请名称",
      dataIndex: "applyName",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { applyName: string }) => !!x.applyName)
            .map((item: { applyName: string }) => item.applyName)
        ),
      onFilter: (value: React.Key | boolean, record: ReportDataProps) =>
        record.applyName === value,
      filterMultiple: false,
    },
    {
      title: "申请类型",
      dataIndex: "applyType",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { applyType: string }) => !!x.applyType)
            .map((item: { applyType: string }) => item.applyType)
        ),
      onFilter: (value: React.Key | boolean, record: ReportDataProps) =>
        record.applyType === value,
      filterMultiple: false,
    },
    {
      title: "申请日期",
      dataIndex: "applyDate",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { applyDate: string }) => !!x.applyDate)
            .map((item: { applyDate: string }) => item.applyDate)
        ),
      onFilter: (value: React.Key | boolean, record: ReportDataProps) =>
        record.applyDate === value,
      filterMultiple: false,
    },
    {
      title: "审批日期",
      dataIndex: "approveDate",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { approveDate: string }) => !!x.approveDate)
            .map((item: { approveDate: string }) => item.approveDate)
        ),
      onFilter: (value: React.Key | boolean, record: ReportDataProps) =>
        record.approveDate === value,
      filterMultiple: false,
    },
    {
      title: "票面金额",
      dataIndex: "invoiceMoney",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { invoiceMoney: string }) => !!x.invoiceMoney)
            .map((item: { invoiceMoney: string }) => item.invoiceMoney)
        ),
      onFilter: (value: React.Key | boolean, record: ReportDataProps) =>
        record.invoiceMoney === value,
      filterMultiple: false,
    },
    {
      title: "实报金额",
      dataIndex: "realityMoney",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { realityMoney: string }) => !!x.realityMoney)
            .map((item: { realityMoney: string }) => item.realityMoney)
        ),
      onFilter: (value: React.Key | boolean, record: ReportDataProps) =>
        record.realityMoney === value,
      filterMultiple: false,
    },
    {
      title: "审批人",
      dataIndex: "approver",
      align: "center",
      filters:
        reportData &&
        filterArray(
          reportData
            .filter((x: { approver: string }) => !!x.approver)
            .map((item: { approver: string }) => item.approver)
        ),
      onFilter: (value: React.Key | boolean, record: ReportDataProps) =>
        record.applyName === value,
      filterMultiple: false,
    },
  ];

  return (
    <Table
      className="mt-3 mx-3"
      columns={columnsTodoList}
      dataSource={reportData}
      rowKey={(record) => record.id}
      scroll={{ x: 800 }}
    />
  );
};
export default TableList;
