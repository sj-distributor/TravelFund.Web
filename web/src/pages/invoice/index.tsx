import useAction from "./hook"
import TableList from "./components/tableList"
import UploadInvoice from "./components/upLoadInvoice"
import { Modal, Pagination } from "antd"

import { TravelInvoices } from "@/services/dtos/invoice"

const Invoice = () => {
  const {
    invoiceList,
    isModalOpen,
    setIsModalOpen,
    uploadIdRef,
    submitBtn,
    totalNum,
    dto,
    setDto,
  } = useAction()

  return (
    <div className="w-full flex flex-1 flex-col bg-gray-200 overflow-y">
      <div className="flex items-center mx-3 mt-3">
        <div
          className="flex justify-center items-center rounded-[0.5rem] w-24 h-10 bg-gray-600 cursor-pointer hover:bg-gray-700 ml-auto mr-5"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="text-white font-medium">上传发票</div>
        </div>
      </div>
      <TableList
        handleDeleteInvoice={(record: TravelInvoices) => {
          console.log(record) // 整个对象
        }}
        invoiceList={invoiceList}
      />
      <div className="my-4 w-full flex">
        <div className="ml-auto mr-3">
          <Pagination
            total={totalNum}
            onChange={(page) => setDto({ ...dto, pageIndex: page })}
          />
        </div>
      </div>
      <Modal
        className="mt-20"
        title="上传发票"
        open={isModalOpen}
        okText="上传"
        cancelText="取消"
        onOk={submitBtn}
        onCancel={() => setIsModalOpen(false)}
      >
        <UploadInvoice ref={uploadIdRef} />
      </Modal>
    </div>
  )
}
export default Invoice
