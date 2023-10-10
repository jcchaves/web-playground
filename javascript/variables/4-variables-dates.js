// Today as a timestamp value
let today = Date.now()

today

// Today as a Date
today = new Date()

today

// Some date as a timestamp for a given date in the format yyyy-MM-dd
let someDate = Date.parse("1990-05-12")

someDate

// Another as a Date type from a timestamp
let anotherDate = new Date(someDate)

anotherDate

console.log(typeof Date.now())
console.log(typeof Date())
console.log(typeof new Date())
