//  create our own Error by extending the Error class

class ValidationError extends Error {
  constructor(message) {
    super(message) // (1)
    this.name = "ValidationError" // (2)
  }
}
//  the function is throwing errors
//  we are catching those errors in the function that call it
//
function readUser(json) {
  let user = JSON.parse(json)

  if (!user.age) {
    throw new ValidationError("No field: age")
  }
  if (!user.name) {
    throw new ValidationError("No field: name")
  }

  return user
}

// Working example with try..catch
//  we check in the catch block what is the type of the error by using instanceof to the class
try {
  let user = readUser('{ "age": 25 }')
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Invalid data: " + err.message) // Invalid data: No field: name
  } else if (err instanceof SyntaxError) {
    // (*)
    console.log("JSON Syntax Error: " + err.message)
  } else {
    throw err // unknown error, rethrow it (**)
  }
}
