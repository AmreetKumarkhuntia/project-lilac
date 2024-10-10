import {
  defaultDisplaySettings,
  keyToSettingMap,
  colorsMap,
  defaultKeyColorMap,
  months,
  days,
  defaultSeparator,
} from "./defaults.js";

/**
 * * ProcessLogger class for logging process information.
 * & Allows customization of the display order of process information fields.
 */
class ProcessLogger {
  // Default settings with displayOrder initialized to defaultDisplaySettings
  settings = {
    displayOrder: defaultDisplaySettings,
    colorsMap: defaultKeyColorMap,
    enablePrintSeparator: false,
    printSeparator: defaultSeparator,
    enablePrintSpaceBetweenLogKeys: true,
  };

  /**
   * * Constructor for ProcessLogger class.
   * @param {Object} settings - Settings for the logger.
   */

  constructor(settings) {
    /**
     * & If settings are provided, override default settings
     * TODO: Make more customisable
     */

    for (const key in settings) {
      if (this.settings.hasOwnProperty(key)) {
        this.settings[key] = settings[key];
      }
    }
  }

  /**
   * * Function description for log
   * & Logs process information based on the provided object.
   * & Fields are logged in the order specified by the displayOrder setting.
   * @param {Object} obj - Object containing process information.
   * TODO: Add other logs like function called etc...
   */

  log(obj) {
    let printString = ""; // Initialize printString to store the final string to be printed
    const size = this.settings.displayOrder.length; // Size of the displayOrder array

    // Iterate through each setting in the displayOrder
    for (let i = 0; i < size; i++) {
      const setting = this.settings.displayOrder[i];
      let val;
      const key = keyToSettingMap[setting];
      if (setting !== "TIME") {
        val = obj[key] ?? "null";
      } else {
        const now = new Date();
        const currentTime = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        const day = days[now.getDay()];
        const date = now.getDate(); // Get the day of the month (numeric date)
        const month = months[now.getMonth()];
        const year = now.getFullYear();

        // Combine time, day of the week, numeric date, month, and year
        const currentDate = `${day} : ${date}/${month}/${year}`;
        val = "[" + currentTime + " : " + currentDate + "]";
      }

      printString += this.settings.colorsMap[key].fgColor;
      printString += this.settings.colorsMap[key].bgColor;
      if (this.settings.enablePrintSpaceBetweenLogKeys === true && i != 0) {
        printString += " " + val;
      } else {
        printString += val;
      }
      printString += colorsMap.reset;
      if (
        i < size - 1 &&
        this.settings.enablePrintSeparator === true &&
        i != 0
      ) {
        printString += this.settings.printSeparator;
      }
    }

    // Print the final string
    console.log(printString);
  }
}

export default ProcessLogger;
