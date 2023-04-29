import { ModalBox } from "../../components/modal"
import ApplyModal from "./components/applyModal"
import TableList from "./components/tableList"
import useAction from "./hook"

const ApproveManagement = () => {
  const { applyRef, applyReimbursement } = useAction()

  return (
    <>
      <div className="w-full h-screen flex flex-1 flex-col bg-gray-200 overflow-hidden">
        <div className="flex items-center mx-3 mt-5">
          <div
            className="flex justify-center items-center rounded-[0.5rem] w-24 h-10 bg-gray-600 cursor-pointer hover:bg-gray-700 ml-auto mr-5"
            onClick={() => applyRef.current?.open()}
          >
            <div className="text-white font-medium">新建申请</div>
          </div>
        </div>
        <TableList applyReimbursement={applyReimbursement}></TableList>
        <ModalBox
          header={
            <div className="flex items-center justify-center flex-1">
              申请报销
            </div>
          }
          isShowCancel={true}
          ref={applyRef}
        >
          <ApplyModal></ApplyModal>
        </ModalBox>
      </div>
    </>
  )
}
export default ApproveManagement
