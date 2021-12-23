// Import types
import {
  AccountConfigType,
  AccountDataType,
  GetTransactionsConfigType,
  TransactionType,
} from "../types";

// Import debug console log
import { debug } from "../utils";
import { DEGIRO_API_PATHS } from "../enums/DeGiroEnums";

// tslint:disable-next-line: max-line-length
export function getTransactionsRequest(
  accountData: AccountDataType,
  accountConfig: AccountConfigType,
  config: GetTransactionsConfigType
): Promise<TransactionType[]> {
  return new Promise((resolve, reject) => {
    // Create params
    let { fromDate, toDate } = config;
    let params = "";
    if (fromDate)
      params +=
        "&fromDate=" +
        encodeURIComponent(
          `${fromDate.getDate().toString().padStart(2, "0")}/${(
            fromDate.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}/${fromDate.getFullYear()}`
        );
    if (!toDate) {
      toDate = new Date();
    }
    params +=
      "&toDate=" +
      encodeURIComponent(
        `${toDate.getDate().toString().padStart(2, "0")}/${(
          toDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}/${toDate.getFullYear()}`
      );

    const requestOptions: {
      method?: string;
      body?: string;
      headers?: any;
      credentials: "include";
      referer: string;
    } = {
      credentials: "include",
      referer: "https://trader.degiro.nl/trader/",
    };

    // Do the request to get a account config data
    const uri = `${accountConfig.data.reportingUrl}${DEGIRO_API_PATHS.GET_TRANSACTIONS}?intAccount=${accountData.data.intAccount}&sessionId=${accountConfig.data.sessionId}&groupTransactionsByOrder=false${params}`;
    debug(`Making request to ${uri}`);
    fetch(uri, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}
