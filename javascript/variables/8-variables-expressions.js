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
