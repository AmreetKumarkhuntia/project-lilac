// Import ProcessLogger from index.js file located in ../src/js directory
import ProcessLogger from "../../src/js/index.js";

// Create a new instance of ProcessLogger
const logger = new ProcessLogger();

// Function to generate a random log object
function testRandomLog() {
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
