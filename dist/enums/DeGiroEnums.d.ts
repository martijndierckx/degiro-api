export declare enum DEGIRO_API_PATHS {
    BASE_API_URL = "https://trader.degiro.nl/",
    BASE_REPORT_DOWNLOAD_URI = "document/download/",
    LOGIN_URL_PATH = "login/secure/login",
    LOGOUT_URL_PATH = "trading/secure/logout",
    GET_ACCOUNT_CONFIG_PATH = "login/secure/config",
    GET_GENERIC_DATA_PATH = "v5/update/",
    CREATE_ORDER_PATH = "v5/checkOrder",
    GET_ACCOUNT_STATE_PATH = "v6/accountoverview",
    GET_ACCOUNT_INFO_PATH = "v5/account/info/",
    GET_LATESTS_NEWS_PATH = "newsfeed/v2/latest-news",
    GET_TOP_NEWS_PATH = "newsfeed/v2/top-news-preview",
    GET_WEB_SETTINGS_PATH = "settings/web",
    GET_WEB_USER_SETTINGS_PATH = "settings/user",
    GET_ACCOUNT_REPORTS_PATH = "document/list/report",
    STOCKS_SEARCH_PATH = "v5/stocks",
    VWD_BASE_API_URL = "https://charting.vwdservices.com/hchart/",
    VWD_GET_PRICE_PATH = "v1/deGiro/data.js",
    GET_ORDER_HISTORY = "v4/order-history"
}
export declare enum DeGiroActions {
    BUY = "BUY",
    SELL = "SELL"
}
export declare enum DeGiroMarketOrderTypes {
    LIMITED = 0,
    MARKET = 2,
    STOP_LOSS = 3,
    STOP_LOSS_LIMIT = 1
}
export declare enum DeGiroTimeTypes {
    DAY = 1,
    PERMANENT = 3
}
export declare enum DeGiroProducTypes {
    shares = 1,
    bonds = 2,
    futures = 7,
    options = 8,
    investmendFunds = 13,
    leveragedProducts = 14,
    etfs = 131,
    cfds = 535,
    warrants = 536
}
export declare enum DeGiroSort {
    ASC = "asc",
    DESC = "desc"
}
export declare enum PORTFOLIO_POSITIONS_TYPE_ENUM {
    ALL = "all",
    ALL_POSITIONS = "allPositions",
    OPEN = "open",
    CLOSED = "closed"
}
export declare enum GET_ORDERS_TYPES {
    ACTIVE = "orders",
    HISTORICAL = "historicalOrders",
    TRANSACTIONS = "transactions"
}
export declare enum GetPriceResolution {
    OneSecond = "PT1S",
    FifteenSeconds = "PT15S",
    ThirtySeconds = "PT30S",
    OneMinute = "PT1M",
    FiveMinutes = "PT5M",
    FifteenMinutes = "PT15M",
    ThirtyMinutes = "PT30M",
    SixtyMinutes = "PT60M",
    OneHour = "PT1H",
    OneDay = "PT1D"
}
export declare enum GetPricePeriod {
    OneDay = "P1D",
    OneWeek = "P1W",
    OneMonth = "P1M",
    ThreeMonths = "P3M",
    SixMonths = "P6M",
    OneYear = "P1Y",
    ThreeYears = "P3Y",
    FiveYYears = "P5Y",
    Max = "P50Y"
}
//# sourceMappingURL=DeGiroEnums.d.ts.map