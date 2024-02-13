//  this function is to show us all the error message alongside with
// file name, function name , and the line number

function logErrorDetailsFunc(error) {
  // Check if the error.stack is available
  if (error.stack) {
    // Split the stack trace into lines
    const stackLines = error.stack.split("\n")
    // Look for the first line of actual stack trace (excluding the error message itself)
    // Adjust the index as needed based on how your environment's stack trace is formatted
    const firstStackTraceLine = stackLines[1] || ""

    // Extract details using a regular expression
    // This pattern might need adjustments based on the specific format of your environment's stack trace
    const detailsPattern = /at (.+) \((.+):(\d+):(\d+)\)/
    const match = detailsPattern.exec(firstStackTraceLine)

    if (match) {
      const [, , fileName, lineNumber] = match

      console.log(
        `Function :  ${arguments.callee.name} , FileName : ${fileName}, Line ${lineNumber}, error message : ${error.message}`
      )
    } else {
      console.log("Could not parse error stack:", firstStackTraceLine)
    }
  } else {
    console.log("No error stack available")
  }
}

// Example usage
try {
  // Simulate an error
  throw new Error("This is a test error")
} catch (error) {
  logErrorDetailsFunc(error)
}
