const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done1!") // Yay! Everything went well!
  }, 200)
})

const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done2!") // Yay! Everything went well!
  }, 200)
})

const p = Promise.all([myFirstPromise, mySecondPromise])

async function func() {
  const resArr = await p
  console.log(resArr)
}

func()
