import type { GetPricePeriod, GetPriceResolution } from "../enums/DeGiroEnums";

export type GetPriceOptionsType = {
  resolution: GetPriceResolution;
  period: GetPricePeriod;
  vwdId: string;
  culture: string;
  timezone: string;
};
