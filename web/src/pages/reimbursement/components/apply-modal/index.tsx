import {
  Button,
  Select,
  Form,
  DatePicker,
  Cascader,
  Upload,
  Radio,
  Input,
} from "antd";
import useAction from "./hook";
import { ApplyModalProps, ChoiceTypeEnum } from "./props";
import { UploadOutlined } from "@ant-design/icons";

const ApplyModal = (props: ApplyModalProps) => {
  const { setIsModalOpen, getExpenseList } = props;
  const {
    reimburseTypeSelect,
    addExpenseData,
    loading,
    locationOptions,
    handleAddExpense,
    setAddExpenseData,
    invoiceList,
    travelRequestList,
    handleSelectScroll,
    setFamilyReimbursement,
    familyReimbursement,
    form,
    fileList,
    setFileList,
  } = useAction({ setIsModalOpen, getExpenseList });

  return (
    <>
      <div className="flex flex-col w-[30rem]">
        <Form
          className="mx-10 relative"
          onFinish={() => handleAddExpense()}
          preserve={false}
          form={form}
        >
          <Form.Item
            label="出游日期"
            name="出游日期"
            rules={[{ required: true, message: "请填写出游日期！" }]}
            className="my-7"
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="回程日期"
            name="回程日期"
            rules={[{ required: true, message: "请填写回程日期！" }]}
            className="my-7"
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="出游地点"
            name="出游地点"
            rules={[{ required: true, message: "请填写出游地点！" }]}
            className="my-7"
          >
            <Cascader
              style={{ width: "100%" }}
              options={locationOptions}
              multiple
              maxTagCount="responsive"
            />
          </Form.Item>
          <Form.Item
            label="申请发票"
            name="申请发票"
            rules={[{ required: true, message: "请填写申请发票！" }]}
            className="my-7"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) return e;
              return e?.fileList;
            }}
          >
            <Upload
              name="file"
              fileList={fileList}
              beforeUpload={(file) => {
                setFileList([file]);
                return false;
              }}
              onRemove={() => setFileList([])}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>上传发票图片</Button>
            </Upload>
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
          <Form.Item
            label="是否申请家人报销"
            name="申请家人报销"
            rules={[{ required: true, message: "请填写是否申请家人报销！" }]}
            className="my-7"
          >
            <Radio.Group
              onChange={(e) => setFamilyReimbursement(e.target.value)}
              value={familyReimbursement}
            >
              <Radio value={ChoiceTypeEnum.Yes}>是</Radio>
              <Radio value={ChoiceTypeEnum.No}>否</Radio>
            </Radio.Group>
          </Form.Item>
          {form.getFieldValue("申请家人报销") === ChoiceTypeEnum.Yes && (
            <Form.Item
              label="家人姓名"
              name="家人姓名"
              rules={[{ required: true, message: "请填写家人姓名！" }]}
              className="my-7"
            >
              <Input placeholder="填写家人姓名" />
            </Form.Item>
          )}

          <Form.Item
            label="是否申请组团额度"
            name="申请组团额度"
            rules={[{ required: true, message: "请填写是否申请组团额度！" }]}
            className="my-7"
          >
            <Radio.Group>
              <Radio value={ChoiceTypeEnum.Yes}>是</Radio>
              <Radio value={ChoiceTypeEnum.No}>否</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="可报销额度" name="可报销额度" className="my-7">
            <span>1000</span>
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
