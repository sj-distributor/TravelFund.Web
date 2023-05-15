import TableList from "./components/table-list"
import ApplyModal from "./components/apply-modal"

import { Modal, Pagination } from "antd"
import "../../antd.css"

import useAction from "./hook"

const TravelApplication = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    applicateList,
    travelApplicationRef,
    submitTravelApplication,
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
          <div className="text-white font-medium">新建申请</div>
        </div>
      </div>
      <TableList applicateList={applicateList} />
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
        title="出行申请"
        open={isModalOpen}
        okText="提交申请"
        cancelText="取消"
        onOk={submitTravelApplication}
        onCancel={() => setIsModalOpen(false)}
      >
        <ApplyModal ref={travelApplicationRef} />
      </Modal>
    </div>
  )
}
export default TravelApplication
