"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebUserSettingsRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
// Importamos constantes
var enums_1 = require("../enums");
var GET_WEB_USER_SETTINGS_PATH = enums_1.DEGIRO_API_PATHS.GET_WEB_USER_SETTINGS_PATH;
function getWebUserSettingsRequest(accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=".concat(accountConfig.data.sessionId, ";"),
            },
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // Do the request to get a account config data
        var uri = "".concat(accountConfig.data.paUrl).concat(GET_WEB_USER_SETTINGS_PATH, "?intAccount=").concat(accountData.data.intAccount, "&sessionId=").concat(accountConfig.data.sessionId);
        (0, utils_1.debug)("Making request to ".concat(uri));
        fetch(uri, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            (0, utils_1.debug)('Response:\n', JSON.stringify(res, null, 2));
            var data = res.data;
            resolve(data);
        })
            .catch(reject);
    });
}
exports.getWebUserSettingsRequest = getWebUserSettingsRequest;
//# sourceMappingURL=getWebUserSettingsRequest.js.map