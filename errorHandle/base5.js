function func1() {
  throw new Error("Function1 error")
}

function func2() {
  func1()
}

function func3() {
  func2()
}

function func4() {
  // without the try/catch block the last console log will never happened
  try {
    func3()
  } catch (error) {
    console.log(error.stack)
  }

  console.log("end of code")
}

func4()
