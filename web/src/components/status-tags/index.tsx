import { AuditStatusType } from "../../services/dtos/apply-reimbursement";

import { Tag } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const StatusTags = (text: number) => {
  switch (text) {
    case AuditStatusType.Pending:
      return (
        <Tag icon={<ClockCircleOutlined />} color={"default"}>
          {"待审核中"}
        </Tag>
      );
    case AuditStatusType.Approved:
      return (
        <Tag icon={<CheckCircleOutlined />} color={"success"}>
          {"审核通过"}
        </Tag>
      );
    case AuditStatusType.Rejected:
      return (
        <Tag icon={<CloseCircleOutlined />} color={"error"}>
          {"审核不通过"}
        </Tag>
      );
    case AuditStatusType.Inprogress:
      return (
        <Tag icon={<SyncOutlined spin />} color={"processing"}>
          {"审核中"}
        </Tag>
      );
    default:
      return null;
  }
};

export default StatusTags;
