import { Modal, Pagination } from "antd";
import { ApprovedModal } from "./components/approve-modal";
import TableList from "./components/table-list";
import useAction from "./hook";

import { TravelExpenseFormDto } from "../../services/dtos/apply-reimbursement";

const ApproveManagement = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    applyDataList,
    tableLoading,
    pageDto,
    setPageDto,
    totalNum,
    getCurrentTravelRequestData,
    currentTravelRequestData,
    currentInvoiceData,
    currentExpenseData,
    getApproveList,
  } = useAction();

  return (
    <div className="h-full bg-gray-200">
      <div className="w-full h-[735px] flex flex-1 flex-col">
        <TableList
          handleAddOpen={(record: TravelExpenseFormDto) => {
            getCurrentTravelRequestData(record);
          }}
          applyDataList={applyDataList}
          tableLoading={tableLoading}
        />
        <div className="my-4 w-full flex">
          <div className="ml-auto mr-3">
            <Pagination
              total={totalNum}
              onChange={(page) => setPageDto({ ...pageDto, pageIndex: page })}
            />
          </div>
        </div>
        <Modal
          width={750}
          title="出行申请"
          open={isModalOpen}
          okText="审批"
          cancelText="取消"
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          destroyOnClose={true}
          footer={null}
        >
          <ApprovedModal
            currentTravelRequestData={currentTravelRequestData}
            currentInvoiceData={currentInvoiceData}
            currentExpenseData={currentExpenseData!}
            setIsModalOpen={setIsModalOpen}
            getApproveList={getApproveList}
          />
        </Modal>
      </div>
    </div>
  );
};
export default ApproveManagement;
