// =========================================================================================
const checkName = () => {
  let jsonStr = '{"age":30}'
  try {
    let user = JSON.parse(jsonStr)
    if (!user.name) {
      // SyntaxError is the name of the error
      // and the string inside it is the message of the error
      throw new SyntaxError("Incomplete data , name is missing")
    }
    console.log(user.name)
  } catch (error) {
    // error.message will be exactly as the message that we throw :Incomplete ....
    // console.log("JSON parse error  name :", error.name)
    // console.log("JSON parse error message :", error.message)
    // error will return the string
    console.log("JSON parse error : :", error)
    // console.log("JSON parse error", error)
  }
}

checkName()

// =========================================================================================
