import { AuditStatusType } from "../../services/dtos/apply-reimbursement";

import { Tag } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const propsData = { icon: <></>, color: "", content: "" };

const setPropsData = (icon: JSX.Element, color: string, content: string) => {
  propsData.icon = icon;
  propsData.color = color;
  propsData.content = content;
};

const StatusTags = (text: number) => {
  switch (text) {
    case AuditStatusType.Pending:
      setPropsData(<ClockCircleOutlined />, "default", "待审核中");
      break;

    case AuditStatusType.Approved:
      setPropsData(<CheckCircleOutlined />, "success", "审核通过");
      break;

    case AuditStatusType.Rejected:
      setPropsData(<CloseCircleOutlined />, "error", "审核不通过");
      break;

    case AuditStatusType.Inprogress:
      setPropsData(<SyncOutlined spin />, "processing", "审核中");
      break;

    default:
      return null;
  }

  return (
    <div className="flex justify-center items-center">
      <Tag icon={propsData.icon} color={propsData.color}>
        {propsData.content}
      </Tag>
    </div>
  );
};

export default StatusTags;
