export declare type GetOrdersResultType = {
    orders: {
        buysell: "B" | "S";
        contractSize: number;
        contractType: number;
        currency: "EUR" | "USD" | string;
        date: string;
        id: string;
        isDeletable: boolean;
        isModifiable: boolean;
        orderTimeType: "DAY" | string;
        orderTimeTypeId: number;
        orderType: "LIMIT" | string;
        orderTypeId: 0;
        price: 13.95;
        product: string;
        productId: number;
        quantity: number;
        size: number;
        stopPrice: number;
        totalOrderValue: number;
    }[];
    lastTransactions: [];
};
//# sourceMappingURL=GetOrdersResultType.d.ts.map