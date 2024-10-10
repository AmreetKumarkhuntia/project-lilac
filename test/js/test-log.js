// Import ProcessLogger from index.js file located in ../src/js directory
import ProcessLogger from "../../src/js/index.js";

// Create a new instance of ProcessLogger
const logger = new ProcessLogger({
  displayOrder: [
    "TIME", // Display time,
    "ORDERID",
    "PROCESSID", // Display process ID
    "FUNCTIONNAME", // Display function name
    "TYPE", // Display type
    "BODY", // Display body
  ],
});

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0; // Generate a random number between 0 and 15
    const v = c === "x" ? r : (r & 0x3) | 0x8; // If 'y', ensure the format
    return v.toString(16); // Convert to hexadecimal
  });
}

// Function to generate a random log object
function testRandomLog() {
  const sessionId = generateUUID();
  // Generating a random processId
  const processId = generateUUID();
  // Fixed value for functionName
  const functionName = "testingString";

  const functionType = "functionCalled";
  // Fixed value for body, represented as a JSON string
  const body = {
    orderId: "1",
    sessionId: "abcdef123456",
    processId: "obj",
    functionName: "function",
    type: "types",
    body: "bodies",
  };

  logger.logWithSetValues(functionName, functionType, body);
  logger.logWithSetValues(functionName, functionType, body);

  logger.logWithSetValues(functionName, functionType, body);

  logger.logWithSetValues(functionName, functionType, body);

  logger.logWithSetValues(functionName, functionType, body);
}

testRandomLog();
