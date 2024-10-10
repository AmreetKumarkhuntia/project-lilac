import { defaultDisplaySettings, keyToSettingMap, colorsMap, defaultKeyColorMap } from './defaults.js';

/** 
 * * ProcessLogger class for logging process information.
 * & Allows customization of the display order of process information fields.
 */
class ProcessLogger {
    // Default settings with displayOrder initialized to defaultDisplaySettings
    settings = {
        displayOrder: defaultDisplaySettings,
        colorsMap: defaultKeyColorMap
    }

    /**
     * * Constructor for ProcessLogger class.
     * @param {Object} settings - Settings for the logger.
     */

    constructor(settings,colorsMap) {
        /**
         * & If settings are provided, override default settings
         * TODO: Make more customisable
         */
        
        if (settings) this.settings = settings;
        if(colorsMap) this.colorsMap = colorsMap
    }

    /**
     * * Function description for log
     * & Logs process information based on the provided object.
     * & Fields are logged in the order specified by the displayOrder setting.
     * @param {Object} obj - Object containing process information.
     * TODO: Add other logs like function called etc...
     */

    log(obj) {
        let printString = ''; // Initialize printString to store the final string to be printed
        const size = this.settings.displayOrder.length; // Size of the displayOrder array

        // Iterate through each setting in the displayOrder
        for (let i = 0; i < size; i++) {
            const setting = this.settings.displayOrder[i];
            const key = keyToSettingMap[setting]
            const val = obj[key]; // Get the value corresponding to the current setting from the object

            // Append the value to the printString
            printString += this.settings.colorsMap[key].fgColor;
            printString += this.settings.colorsMap[key].bgColor;
            printString += " ";
            printString += val;
            printString += " "
            printString += colorsMap.reset;
        }

        // Print the final string
        console.log(printString);
    }
}

export default ProcessLogger;
