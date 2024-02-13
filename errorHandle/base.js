// error is an object that created to represent the error that occurred

//  type of errors that we have:
// NETWORK ERROR
// PROMISE REJECTION
// SECURITY ERRORS

// try { } = enclose code that might potentially cause an error
// catch  { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) always executes . used mostly for cleanup . ex: close files
//  close connections , release resources

//  we need to catch and handle errors so it will not stop the execution of the code of our program

const function1 = () => {
  try {
    console.log("start the try ")
    unycle
    console.log("end the try ")
  } catch (error) {
    // give you the error withe the error stack , but makes the stack half transparent
    console.log("Error ", error)
    throw error
    // console.log("Error message", error.message)
    // , the stack trace provides valuable information
    //  about the sequence of function calls that led up to the error. T
    // console.log("Error stack", error.stack)
  } finally {
    // finally scope will run no matter if it get to the catch statement
    console.log("This is always executed - (finally)")
  }
  // if we does not throw an error form the catch statement, it will get to the done statement
  // in the function call
  console.log("done")
}

const function2 = () => {
  try {
    function1()
  } catch (error) {
    console.log(error)
  }
}

function2()
