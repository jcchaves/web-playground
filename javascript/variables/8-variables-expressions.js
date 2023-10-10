// Primary expressions
let myVar = 1

myVar

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

digits

let person = { name: "John Doe" }

person

function sayHi(person) {
  console.log(person.name)
}

let greet = "Hello"
let myName = "John Doe"
let greeting = `${greet} ${myName}!!!`

greeting

// left-hand-side expressions

let today = new Date()

today

// Increment and decrement

let A

// Prefix increment
A = 1

++A

A

// Postfix increment
A = 1

A++

A

// Prefix decrement
A = 1

--A

A

//Postfix decrement
A = 1

A--

A

// Prefix increment and assignment at the same time
A = 1
let B = ++A

A

B

// Postfix increment and assignment at the same time
A = 1
B = A++

A

B

// Prefix decrement and assignment at the same time
A = 1
B = --A

A

B

//Postfix decrement and assignment at the same time
A = 1
B = A--

A

B

// Unary operators
class Person {}

let student = new Person()

console.log(typeof student)

let n = 5

console.log(+n)

console.log(-n)

let isGreater = 6 > 3 // results in isGreater having the value true

isGreater

let isNotGreater = !isGreater // results in isNotGreater having the value false

isNotGreater

// Arithmetic operators

// Exponentiation
let x = 2 ** 3

x

// Multiplication and division

x = 2 * 3

x

x = 8 / 2

x

x = 8 / 3

x

console.log(typeof x)

// Remainder operator

x = 10 % 7

x

x = 10 % 5 // 10 is fully divisible by 5, there is no remainder, remainder is zero

x

// Relational operators

let comparison = 5 > 2

comparison

comparison = 5 < 2

comparison

comparison = 5 >= 5

comparison

comparison = 5 >= 7

comparison

comparison = 5 <= 5

comparison

comparison = 5 <= 3

comparison

let typeCheck = new String("Hello, am I a String?") instanceof String

typeCheck

typeCheck = "Hello, am I also a String?" instanceof String

typeCheck

// Literal types are not seen as instances of object types
// Literals are more like primitive types, and they can be checked with typeof
let someString = "Hello, what am I?"

console.log(typeof someString)

console.log(typeof someString == "string")

// A literal string is not an instance of String
console.log(someString instanceof String)

typeCheck = 5 instanceof Number

typeCheck

// in operator
let dog = { name: "Max" }

console.log("name" in dog)

// Equality operators

console.log(1 == 1)
console.log("hello" == "hello")
console.log("1" == 1)
console.log(0 == false)

console.log(1 === 1)
console.log("hello" === "hello")
console.log("1" === 1)
console.log(0 === false)

console.log(1 != 1)
console.log("hello" != "hello")
console.log("1" != 1)
console.log(0 != false)

console.log(1 !== 1)
console.log("hello" !== "hello")
console.log("1" !== 1)
console.log(0 !== false)

// Binary logical operators

let truthinessCheck = true && true

truthinessCheck

truthinessCheck = true && false

truthinessCheck

truthinessCheck = false && true

truthinessCheck

truthinessCheck = false && false

truthinessCheck

truthinessCheck = true || true

truthinessCheck

truthinessCheck = true || false

truthinessCheck

truthinessCheck = false || true

truthinessCheck

truthinessCheck = false || false

truthinessCheck

// Nullish coalescing operator

let valueOrDefault = null ?? "Greetings"

valueOrDefault

valueOrDefault = "Hello" ?? "Greetings"

valueOrDefault
