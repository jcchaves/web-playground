// Strings can be created with double or single quotes
// double or single quotes are treated in the same way
let message1 = "Hello world!"

message1

let message2 = "Hello world!"

message2

// Strings can also be created with the backtick character
// This is known as a template literal. Expressions can be interpolated in them.

// This is a string literal without expressions to interpolate
let message3 = `Hello world!`

message3

let greeting = "Hello"
let recipient = "John Doe"

// This is a string literal with an expressions to interpolate
let message4 = `Hello ${recipient}`

message4

// This is a string literal with more than one expression to interpolate
let message5 = `${greeting} ${recipient}!!!`

message5

let a = 1

let b = 2

// This is a string literal with more than one expression to interpolate
// One of the expressions is the addition of 2 numbers
let message6 = `${a} + ${b} = ${a + b}`

message6
