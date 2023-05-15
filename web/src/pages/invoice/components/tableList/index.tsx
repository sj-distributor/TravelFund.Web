import Table, { ColumnsType } from "antd/es/table"
import moment from "moment"
import {
  InvoiceType,
  TableListProps,
  TravelInvoices,
} from "../../../../services/dtos/invoice"

const TableList = ({ handleDeleteInvoice, invoiceList }: TableListProps) => {
  const columnsTodoList: ColumnsType<TravelInvoices> = [
    {
      title: "发票",
      dataIndex: "fileUrl",
      align: "center",
      width: 200,
      render: (record) => {
        return (
          <div className="flex justify-center items-center">
            <img className="w-36 h-16" src={record} alt="" />
          </div>
        )
      },
    },
    {
      title: "上传日期",
      dataIndex: "createdDate",
      align: "center",
      width: 200,
      render: (text) => {
        return <div>{moment(text).format("YYYY-MM-DD")}</div>
      },
    },
    {
      title: "所属类型",
      dataIndex: "type",
      align: "center",
      width: 200,
      render: (text) => {
        return (
          <div>
            {text === InvoiceType.TourismFund && <div>旅游基金</div>}
            {text === InvoiceType.TravelExpenses && <div>差旅费用</div>}
            {text === InvoiceType.PhysicalExamination && <div>体检费用</div>}
          </div>
        )
      },
    },
    {
      title: "发票价税合计",
      dataIndex: "invoicePrice",
      align: "center",
      width: 200,
      render: (text) => {
        return text ? <div>{text}</div> : <div>null</div>
      },
    },
    {
      title: "操作",
      dataIndex: "",
      align: "center",
      width: 200,
      render: (action, record) => {
        return (
          <div className="flex justify-center items-center">
            <div
              className="flex justify-center items-center cursor-pointer border border-gray-200 w-20 h-8 bg-red-700 text-white font-medium hover:bg-red-800 hover:font-semibold rounded-[0.5rem]"
              onClick={() => {
                handleDeleteInvoice(record)
              }}
            >
              <div>删除</div>
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <Table
      className="mt-3 mx-3"
      columns={columnsTodoList}
      dataSource={invoiceList}
      pagination={false}
    />
  )
}
export default TableList
