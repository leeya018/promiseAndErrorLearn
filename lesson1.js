const lee = "lee"
const item = "prod"
const age = 33

console.log({ lee, age })
// show the data on console with style
console.log("%c item is : " + item, "color:orange; font-weight:bold;")

const prodArr = [
  {
    name: "prod1",
    price: 21,
  },
  {
    name: "prod2",
    price: 212,
  },
  {
    name: "prod3",
    price: 2,
  },
]
//    show array of objects inside a table
console.table(prodArr)

// will log the looper word with the time end
//  its not matter what the word is , but it have to be the same one
// example 1
console.time("looper1")
let i = 0

while (i < 1000000) {
  i++
}
console.timeEnd("looper1")

// example 2
console.time("looper2")
console.time("looper3")
let k = 0
let j = 0
while (j < 1000000) {
  j++
}
console.timeEnd("looper2")
while (k < 1000000) {
  k++
}
console.timeEnd("looper3")

//
// should show the line when  where the function is called from , ( not working now )
const deleteMe = () => console.trace("I am deleting")

deleteMe()
deleteMe()

//  destructure - you can send an object to the function
//  and in the function you can decide what field you want to use from it

const showData = ({ name }) => {
  console.log({ name })
}

showData({
  name: "prod1",
  price: 21,
})

// template literals

const cat = "cat"
const dog = "dog"
console.log(`${cat} is not a ${dog}`)

// compose 2 objects into 1 Object
// and if some field are the same , the second field object will run the one from the first object

const details = {
  name: "Lee",
}
const address = {
  lat: 10,
  lon: 11,
  name: "Dani",
}

const user = { ...address, ...details }

console.log(user)

//
