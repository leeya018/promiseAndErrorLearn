const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done1!") // Yay! Everything went well!
  }, 200)
})

function main() {
  myFirstPromise
    .then((data) => {
      console.log(data)
      return data + 1
    })
    .then((data) => {
      console.log(data)
      return data + 1
    })
    .then((data) => {
      //  because I throw an error so it will get to the next catch
      throw new Error("err1")
    })
    .catch((error) => {
      console.log(error.message)
      throw new Error(error.message + "err2")
    })
    .catch((error) => {
      console.log(error)
      return 3
    })
    .catch((error) => {
      console.log("if you put catch after catch so it will never get to here ")
    })
}

main()

//  from one then to the next , you need the return
//  from then to catch or from catch to catch you need the throw err
