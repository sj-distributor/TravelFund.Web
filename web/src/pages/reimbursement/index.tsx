import { Modal } from "antd"
import ApplyModal from "./components/apply-modal"
import TableList from "./components/table-list"
import useAction from "./hook"

const ApproveManagement = () => {
  const { applyReimbursement, isModalOpen, setIsModalOpen } = useAction()

  return (
    <div className="w-full  flex flex-1 flex-col bg-gray-200 overflow-hidden">
      <div className="flex items-center mx-3 mt-3">
        <div
          className="flex justify-center items-center rounded-[0.5rem] w-24 h-10 bg-gray-600 cursor-pointer hover:bg-gray-700 ml-auto mr-5"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="text-white font-medium">新建申请</div>
        </div>
      </div>
      <TableList applyReimbursement={applyReimbursement} />
      <Modal
        className="mt-20"
        title="新建申请"
        open={isModalOpen}
        okText="提交申请"
        cancelText="取消"
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <ApplyModal />
      </Modal>
    </div>
  )
}
export default ApproveManagement
