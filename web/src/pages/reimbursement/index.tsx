import { Modal, Pagination } from "antd";
import ApplyModal from "./components/apply-modal";
import TableList from "./components/table-list";
import useAction from "./hook";

const ApproveManagement = () => {
  const {
    applyReimbursement,
    isModalOpen,
    tableLoading,
    setIsModalOpen,
    getExpenseList,
    pageDto,
    setPageDto,
  } = useAction();

  return (
    <div className="w-full  h-[46.563rem] flex flex-1 flex-col bg-gray-200">
      <div className="flex items-center mx-3 mt-3">
        <div
          className="flex justify-center items-center rounded-[0.5rem] w-24 h-10 bg-gray-600 cursor-pointer hover:bg-gray-700 ml-auto mr-5"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="text-white font-medium">新建申请</div>
        </div>
      </div>
      <TableList
        applyReimbursement={applyReimbursement}
        tableLoading={tableLoading}
      />
      <div className="my-4 w-full flex">
        <div className="ml-auto mr-3">
          <Pagination
            total={pageDto.Count}
            pageSize={pageDto.PageSize}
            onChange={(page) =>
              setPageDto((prve) => ({ ...prve, PageIndex: page }))
            }
          />
        </div>
      </div>
      <Modal
        title="新建申请"
        open={isModalOpen}
        cancelText="取消"
        onCancel={() => setIsModalOpen(false)}
        destroyOnClose
        footer={null}
      >
        <ApplyModal
          setIsModalOpen={setIsModalOpen}
          getExpenseList={getExpenseList}
        />
      </Modal>
    </div>
  );
};
export default ApproveManagement;
