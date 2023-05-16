import Table, { ColumnsType } from "antd/es/table"
import { Image } from "antd"
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
      render: (record) => {
        return (
          <div className="flex justify-center items-center">
            {record === "" ? (
              <Image
                height={58}
                width={120}
                src="error"
                fallback="error"
                alt="图片加载错误..."
              />
            ) : (
              <Image height={58} width={120} src={record} alt="" />
            )}
          </div>
        )
      },
    },
    {
      title: "上传日期",
      dataIndex: "createdDate",
      align: "center",
      render: (text) => {
        return <div>{moment(text).format("YYYY-MM-DD")}</div>
      },
    },
    {
      title: "所属类型",
      dataIndex: "type",
      align: "center",
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
    },
    {
      title: "操作",
      dataIndex: "",
      align: "center",
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
      rowKey={(record) => record.id}
      scroll={{ x: 800 }}
    />
  )
}
export default TableList
