type StatusType = "SCHEDULED" | "DELIVERED" | "PICKEDUP";

type PaymentStatusType = "onDelivery" | "onPickup";

export type OrderType = {
  id: string;
  orderId: string;
  customerId: string;
  customer: string;
  total: number;
  status: StatusType;
  startDate: string;
  dueDate: string;
  repeat: string;
  templateId: string;
  paymentStatus: PaymentStatusType;
};
