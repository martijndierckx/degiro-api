export type GetOrdersResultType = {
  orders: {
    buysell: "B" | "S";
    contractSize: number;
    contractType: number; // ENUM
    currency: "EUR" | "USD" | string; // ENUM
    date: string; //"2021-12-23T14:56:14"
    id: string;
    isDeletable: boolean;
    isModifiable: boolean;
    orderTimeType: "DAY" | string; // ENUM
    orderTimeTypeId: number; // ENUM
    orderType: "LIMIT" | string; // ENUM
    orderTypeId: 0; // ENUM
    price: 13.95; // Stockprice
    product: string;
    productId: number;
    quantity: number;
    size: number;
    stopPrice: number;
    totalOrderValue: number;
  }[];
  lastTransactions: [];
};
