import useAction from "./hook"
import TableList from "./components/table-list"
import UploadInvoice from "./components/upload-invoice"
import { Modal, Pagination, Spin } from "antd"

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
    tableLoading,
  } = useAction()

  return (
    <div className="w-full  h-[735px] flex flex-1 flex-col bg-gray-200 overflow-y">
      <div className="flex items-center mx-3 mt-3">
        <div
          className="flex justify-center items-center rounded-[0.5rem] w-24 h-10 bg-gray-600 cursor-pointer hover:bg-gray-700 ml-auto mr-5"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="text-white font-medium">上传发票</div>
        </div>
      </div>
      {tableLoading === true ? (
        <Spin size="large" />
      ) : (
        <>
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
        </>
      )}

      <Modal
        className="mt-20"
        title="上传发票"
        open={isModalOpen}
        cancelText="取消"
        onCancel={() => setIsModalOpen(false)}
        destroyOnClose
      >
        <UploadInvoice ref={uploadIdRef} submitBtn={submitBtn} />
      </Modal>
    </div>
  )
}
export default Invoice
