/** This object represents the status of a verification message request. */
export interface RequestStatus {
  /** Unique identifier of the verification request. */
  request_id: string;
  /** The phone number to which the verification code was sent, in the E.164 format. */
  phone_number: string;
  /** Total request cost incurred by either checkSendAbility or sendVerificationMessage. */
  request_cost: number;
  /** Optional. If True, the request fee was refunded. */
  is_refunded?: boolean;
  /** Optional. Remaining balance in credits. Returned only in response to a request that incurs a charge. */
  remaining_balance?: number;
  /** Optional. The current message delivery status. Returned only if a verification message was sent to the user. */
  delivery_status?: DeliveryStatus;
  /** Optional. The current status of the verification process. */
  verification_status?: VerificationStatus;
  /** Optional. Custom payload if it was provided in the request, 0-256 bytes. */
  payload?: string;
}

/** This object represents the delivery status of a message. */
interface DeliveryStatus {
  /**
   * The current status of the message. One of the following:
   * - **sent** – the message has been sent to the recipient's device(s),
   * - **delivered** – the message has been delivered to the recipient's device(s),
   * - **read** – the message has been read by the recipient,
   * - **expired** – the message has expired without being delivered or read,
   * - **revoked** – the message has been revoked.
   */
  status: string;
  /** The timestamp when the status was last updated. */
  updated_at: number;
}

/** This object represents the verification status of a code. */
interface VerificationStatus {
  /**
   * The current status of the verification process. One of the following:
   * - **code_valid** – the code entered by the user is correct,
   * - **code_invalid** – the code entered by the user is incorrect,
   * - **code_max_attempts_exceeded** – the maximum number of attempts to enter the code has been exceeded,
   * - **expired** – the code has expired and can no longer be used for verification.
   */
  status: string;
  /** The timestamp for this particular status. Represents the time when the status was last updated. */
  updated_at: number;
  /** Optional. The code entered by the user. */
  code_entered?: string;
}
