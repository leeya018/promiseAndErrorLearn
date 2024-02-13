//  create our own Error by extending the Error class

class ValidationError extends Error {
  constructor(message) {
    super(message) // (1)
    this.name = "ValidationError" // (2)
  }
}

function checkId(id) {
  try {
    if (String(id).length !== 9) {
      throw new ValidationError(
        `this id is not a valid. its len is :${String(id).length}`
      )
    }
  } catch (error) {
    console.log("error name: ", error.name)
    console.log("error message: ", error.message)
    console.log("error stack: ", error.stack)
  }
}

checkId(76)
