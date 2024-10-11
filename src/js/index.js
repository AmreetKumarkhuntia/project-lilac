import {
  defaultDisplaySettings,
  keyToSettingMap,
  colorsMap,
  defaultKeyColorMap,
  months,
  defaultSeparator,
} from "./defaults.js";
import { generateUUID } from "./utils.js";

/**
 * * ProcessLogger class for logging process information.
 * * This class allows customization of the display order for process logging,
 * * enabling users to define how process-related fields should appear during logs.
 */
class ProcessLogger {
  /**
   * * Default settings for how the logger behaves and formats output:
   * ? `displayOrder`: Order in which log fields will be displayed.
   * ? `colorsMap`: Color settings for each log field.
   * ? `enablePrintSeparator`: Enables or disables a separator between log entries.
   * ? `printSeparator`: Character or string to use as a separator.
   * ? `enablePrintSpaceBetweenLogKeys`: Adds space between log fields if true.
   * ? `enableLogCounterIncrement`: Automatically increments the log entry counter.
   */
  settings = {
    displayOrder: defaultDisplaySettings,
    colorsMap: defaultKeyColorMap,
    enablePrintSeparator: true,
    printSeparator: defaultSeparator,
    enablePrintSpaceBetweenLogKeys: true,
    enableLogCounterIncrement: true,
  };

  /**
   * * Values used to track log details such as order, session, and process ID:
   * ? `orderId`: Unique identifier for each log entry, starting at 0.
   * ? `sessionId`: Unique session identifier, generated automatically.
   * ? `processId`: Unique process identifier, generated automatically.
   */
  logSetValues = {
    orderId: 0,
    sessionId: null,
    processId: null,
  };

  /**
   * * Constructor for ProcessLogger.
   * @param {Object} settings - Custom settings to override defaults.
   * * Allows overriding of the default settings by passing custom settings.
   * * Automatically generates a session ID on instantiation.
   */
  constructor(settings) {
    for (const key in settings) {
      if (this.settings.hasOwnProperty(key)) {
        this.settings[key] = settings[key];
      }
    }
    this.logSetValues.sessionId = generateUUID();
  }

  /**
   * * Logs process information based on the provided object.
   *   @param {Object} obj - Object containing the process information to be logged.
   * * Logs fields in the order specified by the `displayOrder` setting.
   * * Supports adding a timestamp, applying custom colors, and formatting.
   */
  directLog(obj) {
    let printString = "";
    const size = this.settings.displayOrder.length;
    let prevKey = null;
    let nextKey = null;

    for (let i = 0; i < size; i++) {
      const setting = this.settings.displayOrder[i];
      let val;
      const key = keyToSettingMap[setting];
      if (i + 1 < size)
        nextKey = keyToSettingMap[this.settings.displayOrder[i + 1]];

      if (setting !== "TIME") {
        val = obj[key] ?? "null";
      } else {
        const now = new Date();
        const milliseconds = now.getMilliseconds();

        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");

        const currentTime = `${hours}:${minutes}:${seconds}.${milliseconds
          .toString()
          .padStart(3, "0")}`;

        const date = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();

        val = `[${date}/${month}/${year}-${currentTime}]`;
      }

      printString += this.settings.colorsMap[key].fgColor;
      printString += this.settings.colorsMap[key].bgColor;

      if (this.settings.enablePrintSpaceBetweenLogKeys === true && i != 0) {
        printString += " " + val;
      } else {
        printString += val;
      }
      if (this.settings.enablePrintSpaceBetweenLogKeys === true)
        printString += " ";

      printString += colorsMap.reset;
      if (i < size - 1 && this.settings.enablePrintSeparator) {
        printString += this.settings.colorsMap[key].fgComplementary;
        printString += this.settings.colorsMap[nextKey].bgColor;
        printString += this.settings.printSeparator;
      }
      prevKey = key;
      printString += colorsMap.reset;
    }
    console.log(printString);
  }

  /**
   * * Logs detailed process information with preset values.
   *   @param {string} functionName - The name of the function being logged.
   *   @param {string} functionType - The type/category of the function.
   *   @param {Object} body - Additional data to be logged.
   * * Logs information with predefined sessionId and processId values,
   * * auto-generating these values if not already set. Supports logging
   * * additional information like the function name and type.
   */

  logWithSetValues(functionName, functionType, body) {
    const bodyText = JSON.stringify(body);

    if (this.logSetValues.processId === null) {
      this.logSetValues.processId = generateUUID();
    }
    if (this.logSetValues.sessionId === null) {
      this.logSetValues.sessionId = generateUUID();
    }

    const log = {
      orderId: this.logSetValues.orderId,
      sessionId: this.logSetValues.sessionId,
      processId: this.logSetValues.processId,
      functionName: functionName,
      type: functionType,
      body: bodyText,
    };

    this.directLog(log);
    this.logSetValues.orderId++;
  }
}

export default ProcessLogger;
