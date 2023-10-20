import {
  Button,
  Select,
  Form,
  DatePicker,
  Upload,
  Input,
  Radio,
  Space,
} from "antd";
import useAction from "./hook";
import { ApplyModalProps } from "./props";
import { UploadOutlined } from "@ant-design/icons";
import cascaderOptions, { DivisionUtil } from "@pansy/china-division";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

const ApplyModal = (props: ApplyModalProps) => {
  const { setIsModalOpen, getExpenseList } = props;
  const { reimburseTypeSelect, addExpenseData, handleAddExpense, loading } =
    useAction({ setIsModalOpen, getExpenseList });

  const [values, setValues] = useState(false);

  const handleChange = (Value: string) => {
    setValues(Value === "是");
  };

  const [code, setCode] = useState<string>("");
  const divisionUtil = new DivisionUtil(cascaderOptions);
  const cityOptions = divisionUtil.getChildrenByCode(code);

  const handleProvinceChange = (value: string) => {
    setCode(value);
  };

  return (
    <>
      <div className="flex flex-col w-[30rem]">
        <Form
          className="mx-10 relative"
          onFinish={() => handleAddExpense()}
          preserve={false}
        >
          <Form.Item
            label="出游日期"
            name="出游日期"
            rules={[{ required: true, message: "请填写出游日期！" }]}
            className="my-7"
          >
            <DatePicker
              style={{
                width: "100%",
              }}
              placeholder="选择出游日期"
            />
          </Form.Item>
          <Form.Item
            label="回程日期"
            name="回程日期"
            rules={[{ required: true, message: "请填写回程日期！" }]}
            className="my-7"
          >
            <DatePicker style={{ width: "100%" }} placeholder="选择回程日期" />
          </Form.Item>
          <Form.Item
            label="出游地点"
            name="出游地点"
            rules={[{ required: true, message: "请填写出游地点！" }]}
            className="my-7"
          >
            <Space wrap>
              <Select
                style={{
                  width: 120,
                }}
                onChange={(value) => handleProvinceChange(value)}
                options={divisionUtil.getProvinces()}
                maxTagCount="responsive"
                placeholder="选择省份"
              />
              <Select
                style={{
                  width: 120,
                }}
                options={cityOptions}
                maxTagCount="responsive"
                placeholder="城市"
              />
              <Space>
                <PlusCircleOutlined />
              </Space>
            </Space>
          </Form.Item>
          <Form.Item
            label="申请发票"
            name="申请发票"
            rules={[{ required: true, message: "请上传发票！" }]}
            className="my-7"
          >
            <Upload
              beforeUpload={() => {
                return false;
              }}
              accept="image/*"
            >
              <Button className="flex items-center" icon={<UploadOutlined />}>
                选择图片
              </Button>
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
            name="是否申请家人报销"
            rules={[{ required: true, message: "请选择！" }]}
            className="my-7"
          >
            <Select
              onChange={handleChange}
              options={[
                {
                  value: "是",
                  label: "是",
                },
                {
                  value: "否",
                  label: "否",
                },
              ]}
            />
          </Form.Item>
          {values && (
            <Form.Item
              label="家人姓名"
              name="家人姓名"
              rules={[{ required: true, message: "请填写家人姓名！" }]}
              className="my-7"
            >
              <Input placeholder="家人姓名" />
            </Form.Item>
          )}
          <Form.Item
            label="是否申请组团额度"
            name="是否申请组团额度"
            rules={[{ required: true, message: "请选择！" }]}
            className="my-7"
          >
            <Radio.Group>
              <Radio value={1}>是</Radio>
              <Radio value={2}>否</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="可报销额度"
            name="可报销额度"
            rules={[{ required: true, message: "请选择！" }]}
            className="my-7"
          >
            <span>{values ? "¥1000.00" : "¥0.00"}</span>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
            <Button
              type="primary"
              className="bg-gray-700 text-white h-9"
              htmlType="submit"
              loading={loading}
              disabled={!values}
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
