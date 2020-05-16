import { CashFoundType, AccountConfigType, GetPorfolioConfigType, AccountDataType, SearchProductOptionsType, SearchProductResultType } from '../types';
/**
 * @interface DeGiroClassInterface
 */
export interface DeGiroClassInterface {
    login(): Promise<void>;
    hasLogin(): boolean;
    getAccountConfig(): Promise<AccountConfigType>;
    getAccountData(): Promise<AccountDataType>;
    getCashFunds(): CashFoundType[];
    getPortfolio(config: GetPorfolioConfigType): Promise<any[]>;
    getProductsByIds(ids: string[]): Promise<any[]>;
    searchProduct(options: SearchProductOptionsType): Promise<SearchProductResultType[]>;
}
//# sourceMappingURL=DeGiroClassInterface.d.ts.map