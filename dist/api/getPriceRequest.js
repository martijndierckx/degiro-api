"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceRequest = void 0;
// Import paths
var enums_1 = require("../enums");
var VWD_BASE_API_URL = enums_1.DEGIRO_API_PATHS.VWD_BASE_API_URL, VWD_GET_PRICE_PATH = enums_1.DEGIRO_API_PATHS.VWD_GET_PRICE_PATH;
function getPriceRequest(accountData, accountConfig, options) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var resolution, period, vwdId, culture, timezone, params, requestOptions, URI, latestFetch, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resolution = options.resolution, period = options.period, vwdId = options.vwdId, culture = options.culture, timezone = options.timezone;
                    params = "requestid=1&" +
                        "resolution=".concat(resolution, "&") +
                        "culture=".concat(culture, "&") +
                        "period=".concat(period, "&") +
                        "series=issueid%3A".concat(vwdId, "&") +
                        "series=price%3Aissueid%3A".concat(vwdId, "&") +
                        "format=json&" +
                        "userToken=".concat(accountData.data.id, "&") +
                        "tz=".concat(timezone);
                    requestOptions = {
                        referer: 'https://trader.degiro.nl/trader/',
                    };
                    URI = "".concat(VWD_BASE_API_URL).concat(VWD_GET_PRICE_PATH, "?").concat(params);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(URI, requestOptions)];
                case 2:
                    latestFetch = _a.sent();
                    return [4 /*yield*/, latestFetch.json()];
                case 3:
                    result = _a.sent();
                    result.start = new Date(result.start);
                    result.end = new Date(result.end);
                    resolve(result);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    return [2 /*return*/, reject(error_1)];
                case 5: return [2 /*return*/];
            }
        });
    }); });
}
exports.getPriceRequest = getPriceRequest;
//# sourceMappingURL=getPriceRequest.js.map