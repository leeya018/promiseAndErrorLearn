const promiseA = new Promise((resolve, reject) => {
  resolve(777)
})
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val))
console.log("immediate logging")
//
