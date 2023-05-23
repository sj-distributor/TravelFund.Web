import { AuditStatusType } from "../../services/dtos/apply-reimbursement";

import { Tag } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const StatusTags = (text: number) => {
  let icon;
  let color;
  let content;

  switch (text) {
    case AuditStatusType.Pending:
      icon = <ClockCircleOutlined />;
      color = "default";
      content = "待审核中";
      break;
    case AuditStatusType.Approved:
      icon = <CheckCircleOutlined />;
      color = "success";
      content = "审核通过";
      break;
    case AuditStatusType.Rejected:
      icon = <CloseCircleOutlined />;
      color = "error";
      content = "审核不通过";
      break;
    case AuditStatusType.Inprogress:
      icon = <SyncOutlined spin />;
      color = "processing";
      content = "审核中";
      break;
    default:
      return null;
  }
  return (
    <div className="flex justify-center items-center">
      <Tag icon={icon} color={color}>
        {content}
      </Tag>
    </div>
  );
};
export default StatusTags;
