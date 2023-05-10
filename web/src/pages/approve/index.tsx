import { Modal } from "antd"
import ApprovedModal from "./components/approveModal"
import TableList from "./components/tableList"
import useAction from "./hook"
import { ApplyDataProps } from "@/services/dtos/approveManagement"

const ApproveManagement = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    applyData,
    currentListData,
    setCurrentListData,
  } = useAction()

  return (
    <div className="h-full bg-gray-200">
      <div className="w-full flex flex-1 flex-col  ">
        <div className="flex items-center mx-3 mt-3">
          <div className="flex justify-center items-center rounded-[0.5rem] w-24 h-10 bg-gray-600 cursor-pointer hover:bg-gray-700 ml-auto mr-5">
            <div className="text-white font-medium">新建申请</div>
          </div>
        </div>
        <TableList
          handleAddOpen={(record: ApplyDataProps) => {
            setIsModalOpen(true)
            setCurrentListData(record)
          }}
          applyData={applyData}
        />
        <Modal
          className="-mt-10"
          width={750}
          title="出行申请"
          open={isModalOpen}
          okText="审批"
          cancelText="取消"
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
        >
          <ApprovedModal currentListData={currentListData} />
        </Modal>
      </div>
    </div>
  )
}
export default ApproveManagement
