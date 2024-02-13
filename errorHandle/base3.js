// run i Go Live mode

//  2 check of the inputs
//  1 check for the type
//  1 check for the devisor
const devFunc = (dividend, devisor) => {
  try {
    let dividendNum = Number(dividend)
    let devisorNum = Number(devisor)
    console.log(dividendNum)
    if (isNaN(dividendNum) || isNaN(devisorNum) === NaN) {
      throw new Error("both inputs  must be a number")
    }
    if (dividendNum === 0) throw new Error("You can't divide by 0")
    const res = dividendNum / devisorNum
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
// cannot divide by 0
// devFunc(1, 0)

// both parameters must be a number
devFunc("data", 0)
