import { Button, Input, Select, Form } from "antd";
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
        <Form
          className="mx-10 relative"
          onFinish={() => handleAddExpense()}
          preserve={false}
        >
          <Form.Item
            label="申请标题"
            name="申请标题"
            rules={[{ required: true, message: "请填写申请标题！" }]}
            className="my-7"
          >
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
          </Form.Item>
          <Form.Item
            label="申请表单"
            name="申请表单"
            rules={[{ required: true, message: "请填写申请表单！" }]}
            className="my-7"
          >
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
          </Form.Item>
          <Form.Item
            label="申请发票"
            name="申请发票"
            rules={[{ required: true, message: "请填写申请发票！" }]}
            className="my-7"
          >
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
          </Form.Item>
          <Form.Item
            label="申请类型"
            name="申请类型"
            rules={[{ required: true, message: "请填写申请类型！" }]}
            className="my-7"
          >
            <Select
              className="w-full"
              showSearch
              placeholder="选择申请类型"
              value={addExpenseData.type + ""}
              optionFilterProp="children"
              options={reimburseTypeSelect}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
            <Button
              type="primary"
              className="bg-gray-700 text-white h-9"
              htmlType="submit"
              loading={loading}
            >
              提交申请
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default ApplyModal;
