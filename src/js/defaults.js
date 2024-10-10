/**
 * * Contains default display settings.
 * & Default order decides which parameters are displayed when.
 */

export const defaultDisplaySettings = [
  "TIME", // Display time
  "ORDERID", // Display order ID
  "SESSIONID", // Display session ID
  "PROCESSID", // Display process ID
  "FUNCTIONNAME", // Display function name
  "TYPE", // Display type
  "BODY", // Display body
];

export const availableKeys = [
  "TIME", // Display time
  "ORDERID", // Display order ID
  "SESSIONID", // Display session ID
  "PROCESSID", // Display process ID
  "FUNCTIONNAME", // Display function name
  "TYPE", // Display type
  "BODY", // Display body
];

/**
 * * Contains key map.
 * & Maps display settings keys to corresponding object keys.
 */

export const keyToSettingMap = {
  ORDERID: "orderId", // Map ORDERID setting to orderId object key
  SESSIONID: "sessionId", // Map SESSIONID setting to sessionId object key
  PROCESSID: "processId", // Map PROCESSID setting to processId object key
  FUNCTIONNAME: "functionName", // Map FUNCTIONNAME setting to functionName object key
  TYPE: "type", // Map TYPE setting to type object key
  BODY: "body", // Map BODY setting to body object key
  TIME: "time", // Show Currenct Time
};

/**
 * * Contains ANSI escape codes for colors.
 */

export const colorsMap = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  // Foreground colors
  fgBlack: "\x1b[30m",
  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",
  fgBlue: "\x1b[34m",
  fgMagenta: "\x1b[35m",
  fgCyan: "\x1b[36m",
  fgWhite: "\x1b[37m",
  fgGray: "\x1b[90m",
  fgBrightRed: "\x1b[91m",
  fgBrightGreen: "\x1b[92m",
  fgBrightYellow: "\x1b[93m",
  fgBrightBlue: "\x1b[94m",
  fgBrightMagenta: "\x1b[95m",
  fgBrightCyan: "\x1b[96m",
  fgBrightWhite: "\x1b[97m",

  // Background colors
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
  bgGray: "\x1b[100m",
  bgBrightRed: "\x1b[101m",
  bgBrightGreen: "\x1b[102m",
  bgBrightYellow: "\x1b[103m",
  bgBrightBlue: "\x1b[104m",
  bgBrightMagenta: "\x1b[105m",
  bgBrightCyan: "\x1b[106m",
  bgBrightWhite: "\x1b[107m",
};

/**
 * * Contains default key color map.
 * & Maps each key to its corresponding foreground and background colors.
 */

export const defaultKeyColorMap = {
  orderId: {
    fgColor: colorsMap.fgBrightMagenta,
    bgColor: "",
  },
  sessionId: {
    fgColor: colorsMap.fgBrightWhite,
    bgColor: "",
  },
  processId: {
    fgColor: colorsMap.fgBrightRed,
    bgColor: "",
  },
  functionName: {
    fgColor: colorsMap.fgBrightCyan,
    bgColor: "",
  },
  type: {
    fgColor: colorsMap.bright + colorsMap.fgBrightYellow,
    bgColor: "",
  },
  body: {
    fgColor: "",
    bgColor: "",
  },
  time: {
    fgColor: colorsMap.fgBrightGreen,
    bgColor: "",
  },
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const defaultSeparator = ",";
