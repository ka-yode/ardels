import { VerificationStatus } from "./lib/types";
import { Badge } from "./badge";
import React from "react";

interface StatusBadegeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadegeProps) => {
  switch (status) {
    case "pending":
      return <Badge variant="grayscale">Pending</Badge>;
    case "success":
      return <Badge variant="success">Success</Badge>;
    // case VerificationStatus.FAILED_ADDRESS:
    //   return (
    //     <Badge variant="destructive">{VerificationStatus.FAILED_ADDRESS}</Badge>
    //   );
    // case VerificationStatus.FAILED_GUARANTOR:
    //   return (
    //     <Badge variant="destructive">
    //       {VerificationStatus.FAILED_GUARANTOR}
    //     </Badge>
    //   );
    // case VerificationStatus.IN_VERIFICATION:
    //   return (
    //     <Badge variant="warning">{VerificationStatus.IN_VERIFICATION}</Badge>
    //   );
    default:
      break;
  }
};

export default StatusBadge;
