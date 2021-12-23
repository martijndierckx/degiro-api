"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReportURIFromID = void 0;
// Importamos enumerados de URLs
var enums_1 = require("../enums");
var BASE_REPORT_DOWNLOAD_URI = enums_1.DEGIRO_API_PATHS.BASE_REPORT_DOWNLOAD_URI;
/**
 * Generate a download URL to the report with the `id` identifier
 * @param id Report id to generate download URL
 */
var generateReportURIFromID = function (reportId, accountData, accountConfig) {
    return "".concat(accountConfig.data.paUrl).concat(BASE_REPORT_DOWNLOAD_URI).concat(reportId, "?sessionId=").concat(accountConfig.data.sessionId, "&intAccount=").concat(accountData.data.intAccount);
};
exports.generateReportURIFromID = generateReportURIFromID;
//# sourceMappingURL=generateReportURIFromID.js.map