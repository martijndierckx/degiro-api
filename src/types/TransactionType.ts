export type TransactionType = {
  buysell: "B" | "S";
  counterParty: "MK" | string;
  date: string;
  fxRate: number;
  id: number;
  orderTypeId: number;
  price: number;
  productId: number;
  quantity: number;
  total: number;
  totalInBaseCurrency: number;
  totalPlusFeeInBaseCurrency: number;
  tradingVenue: string;
  transactionTypeId: number;
  transfered: boolean;
};
