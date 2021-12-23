"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountStateRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
var DeGiroEnums_1 = require("../enums/DeGiroEnums");
var GET_ACCOUNT_STATE_PATH = DeGiroEnums_1.DEGIRO_API_PATHS.GET_ACCOUNT_STATE_PATH;
// tslint:disable-next-line: max-line-length
function getAccountStateRequest(accountData, accountConfig, config) {
    return new Promise(function (resolve, reject) {
        // Create params to get orders by types
        var from = config.from, to = config.to;
        var params = '';
        params += "fromDate=".concat(encodeURIComponent(from), "&");
        params += "toDate=".concat(encodeURIComponent(to), "&");
        params += "intAccount=".concat(accountData.data.intAccount, "&");
        params += "sessionId=".concat(accountConfig.data.sessionId);
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=".concat(accountConfig.data.sessionId, ";"),
            },
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // Do the request to get a account config data
        var uri = "".concat(accountConfig.data.reportingUrl).concat(GET_ACCOUNT_STATE_PATH, "?").concat(params);
        (0, utils_1.debug)("Making request to ".concat(uri));
        fetch(uri, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            if (!res.data || !res.data.cashMovements || !Array.isArray(res.data.cashMovements))
                return reject('DeGiro response does not match with know scheme');
            resolve(res.data.cashMovements);
        })
            .catch(reject);
    });
}
exports.getAccountStateRequest = getAccountStateRequest;
//# sourceMappingURL=getAccountStateRequest.js.map