// const pErr = new Promise((resolve, reject) => {
//   reject("Always fails")
// })
const pErr = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "Error")
})

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually")
})

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "Done quick")
})

//  run them all at once and wait for them
// Promise.all([pFast, pSlow])
//   .then((value) => {
//     console.log(value)
//     // pFast fulfills first
//   })
//   .catch((err) => console.log(err.message))

// Promise.all([pSlow, pFast])
//   .then((value) => {
//     console.log(value)
//     // pFast fulfills first
//   })
//   .catch((err) => console.log(err.message))

//  run them in iteration
// its like Promise.race() - it will invoke only the one the resolve first and then it stops
// and it dose not care if a promise was rejected first
// Promise.any([pErr, pSlow, pFast])
//   .then((value) => {
//     console.log(value)
//     // pFast fulfills first
//   })
//   .catch((err) => console.log(err.message))
// Logs:
// Done quick

// Promise.race - run them all and wait for the first to finish
// if there was a rejected promise it will stop all
// Promise.race([pErr, pSlow, pFast])
//   .then((value) => {
//     console.log(value)
//     // pFast fulfills first
//   })
//   .catch((err) => console.log(err.message))

//  if the error is shorter time than the fast resolved promised. it will invoke the reject
Promise.race([pErr, pSlow, pFast])
  .then((value) => {
    console.log(value)
    // pFast fulfills first
  })
  .catch((err) => console.log(err))

// SumUp
// race vs any
//  any  - race between promises who are resolving
//  race  - race between all promises ( resolves and rejected promises)
