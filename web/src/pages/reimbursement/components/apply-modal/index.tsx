import { Button, Input, Select } from "antd";
import DebounceSelect from "../debounce-select";
import useAction from "./hook";
import { UserValue } from "@/services/dtos/apply-reimbursement";
import { ApplyModalProps } from "./props";

const ApplyModal = (props: ApplyModalProps) => {
  const { setIsModalOpen, getExpenseList } = props;
  const {
    reimburseTypeSelect,
    contextHolder,
    dto,
    fetchTravelRequestList,
    handleAddExpense,
    setDto,
    fetchUserList,
  } = useAction({ setIsModalOpen, getExpenseList });

  return (
    <>
      {contextHolder}
      <div className="flex flex-col w-[30rem]">
        <div className="mx-10 relative">
          <div className="flex items-center w-full my-7">
            <div className="w-28 text-gray-900">申请标题：</div>
            <Input
              value={dto.title}
              placeholder="标题"
              onChange={(e) =>
                setDto((prve) => ({ ...prve, title: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center w-full my-7">
            <div className="w-28 text-gray-900">申请表单：</div>
            <DebounceSelect
              value={dto.travelRequestFormId}
              placeholder="选择申请表单"
              showSearch
              fetchOptions={fetchTravelRequestList}
              style={{ width: "100%" }}
              onChange={(newValue) => {
                setDto((prve) => ({
                  ...prve,
                  travelRequestFormId: newValue as UserValue[],
                }));
              }}
            />
          </div>
          <div className="flex items-center w-full my-7">
            <div className="w-28 text-gray-900">申请发票：</div>
            <DebounceSelect
              mode="multiple"
              value={dto.travelInvoiceIds}
              placeholder="选择申请发票"
              fetchOptions={fetchUserList}
              onChange={(newValue) => {
                setDto((prve) => ({
                  ...prve,
                  travelInvoiceIds: newValue as UserValue[],
                }));
              }}
              className="w-full max-h-12 overflow-y-auto"
            />
          </div>
          <div className="flex items-center w-full my-7">
            <div className="w-28 text-gray-900">申请类型：</div>
            <Select
              className="w-full"
              showSearch
              placeholder=""
              defaultValue={"旅游基金"}
              optionFilterProp="children"
              options={reimburseTypeSelect}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            type="primary"
            className="bg-gray-700 text-white"
            htmlType="submit"
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
