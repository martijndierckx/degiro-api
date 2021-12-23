"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistoricalOrdersRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
var DeGiroEnums_1 = require("../enums/DeGiroEnums");
// tslint:disable-next-line: max-line-length
function getHistoricalOrdersRequest(accountData, accountConfig, config) {
    return new Promise(function (resolve, reject) {
        // Create params
        var fromDate = config.fromDate, toDate = config.toDate;
        var params = "";
        if (fromDate)
            params +=
                "&fromDate=" +
                    encodeURIComponent("".concat(fromDate.getDate().toString().padStart(2, "0"), "/").concat((fromDate.getMonth() + 1)
                        .toString()
                        .padStart(2, "0"), "/").concat(fromDate.getFullYear()));
        if (!toDate) {
            toDate = new Date();
        }
        params +=
            "&toDate=" +
                encodeURIComponent("".concat(toDate.getDate().toString().padStart(2, "0"), "/").concat((toDate.getMonth() + 1)
                    .toString()
                    .padStart(2, "0"), "/").concat(toDate.getFullYear()));
        var requestOptions = {
            credentials: "include",
            referer: "https://trader.degiro.nl/trader/",
        };
        // Do the request to get a account config data
        var uri = "".concat(accountConfig.data.reportingUrl).concat(DeGiroEnums_1.DEGIRO_API_PATHS.GET_ORDER_HISTORY, "?intAccount=").concat(accountData.data.intAccount, "&sessionId=").concat(accountConfig.data.sessionId).concat(params);
        (0, utils_1.debug)("Making request to ".concat(uri));
        fetch(uri, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            resolve(res.data);
        })
            .catch(reject);
    });
}
exports.getHistoricalOrdersRequest = getHistoricalOrdersRequest;
//# sourceMappingURL=getHistoricalOrdersRequest%20copy.js.map