import { Button, Input, Select } from "antd";
import DebounceSelect from "../debounce-select";
import useAction from "./hook";
import { SelectValue } from "@/services/dtos/apply-reimbursement";
import { ApplyModalProps } from "./props";

const ApplyModal = (props: ApplyModalProps) => {
  const { setIsModalOpen, getExpenseList } = props;
  const {
    reimburseTypeSelect,
    addExpenseData,
    travelRequestList,
    handleAddExpense,
    setAddExpenseData,
    invoiceList,
    handleSelectScroll,
    loading,
  } = useAction({ setIsModalOpen, getExpenseList });

  return (
    <>
      <div className="flex flex-col w-[30rem]">
        <div className="mx-10 relative">
          <div className="flex items-center w-full my-7">
            <div className="w-28 text-gray-900">申请标题：</div>
            <Input
              value={addExpenseData.title}
              placeholder="输入报销申请标题"
              onChange={(e) =>
                setAddExpenseData((prve) => ({
                  ...prve,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex items-center w-full my-7">
            <div className="w-28 text-gray-900">申请表单：</div>
            <Select
              value={
                addExpenseData.travelRequestFormId
                  ? addExpenseData.travelRequestFormId
                  : undefined
              }
              placeholder="选择申请表单"
              showSearch
              options={travelRequestList}
              filterOption
              style={{ width: "100%" }}
              onChange={(newValue) => {
                setAddExpenseData((prve) => ({
                  ...prve,
                  travelRequestFormId: newValue,
                }));
              }}
              onPopupScroll={(e) => handleSelectScroll(e, "requestFrom")}
            />
          </div>
          <div className="flex items-center w-full my-7">
            <div className="w-28 text-gray-900">申请发票：</div>
            <Select
              mode="multiple"
              value={addExpenseData.travelInvoiceIds}
              placeholder="选择申请发票"
              options={invoiceList}
              filterOption
              allowClear
              onChange={(newValue) => {
                setAddExpenseData((prve) => ({
                  ...prve,
                  travelInvoiceIds: newValue as number[],
                }));
              }}
              onPopupScroll={(e) => handleSelectScroll(e, "travelInvoice")}
              className="w-full max-h-12 overflow-y-auto"
            />
          </div>
          <div className="flex items-center w-full my-7">
            <div className="w-28 text-gray-900">申请类型：</div>
            <Select
              className="w-full"
              showSearch
              placeholder=""
              value={addExpenseData.type + ""}
              defaultValue={"旅游基金"}
              optionFilterProp="children"
              options={reimburseTypeSelect}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            type="primary"
            className="bg-gray-700 text-white"
            htmlType="submit"
            loading={loading}
            onClick={handleAddExpense}
          >
            申请
          </Button>
        </div>
      </div>
    </>
  );
};
export default ApplyModal;
