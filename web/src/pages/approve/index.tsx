import { ModalBox } from "../../components/modal"
import ApprovedModal from "./components/approveModal"
import TableList from "./components/tableList"
import useAction from "./hook"
import { ApplyDataProps } from "@/services/dtos/approveManagement"

const ApproveManagement = () => {
  const { approveRef, applyData, currentListData, setCurrentListData } =
    useAction()

  return (
    <>
      <div className="w-full h-screen flex flex-1 flex-col bg-gray-200 overflow-hidden">
        <div className="flex items-center mx-3 mt-5">
          <div className="flex justify-center items-center rounded-[0.5rem] w-24 h-10 bg-gray-600 cursor-pointer hover:bg-gray-700 ml-auto mr-5">
            <div className="text-white font-medium">新建申请</div>
          </div>
        </div>
        <TableList
          handleAddOpen={(record: ApplyDataProps) => {
            approveRef.current?.open()
            setCurrentListData(record)
          }}
          applyData={applyData}
        ></TableList>
        <ModalBox
          header={
            <div className="flex items-center justify-center flex-1">审批</div>
          }
          isShowCancel={true}
          ref={approveRef}
        >
          <ApprovedModal currentListData={currentListData}></ApprovedModal>
        </ModalBox>
      </div>
    </>
  )
}
export default ApproveManagement
