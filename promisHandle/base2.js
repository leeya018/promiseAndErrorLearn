const aThenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42)
      },
    })
  },
}

Promise.resolve(aThenable).then((data) => console.log(data))
