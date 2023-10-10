let name = null

name

const TAX_REFERENCE_NUMBER = null

TAX_REFERENCE_NUMBER

let birthdate

birthdate

// Equality and identify for null and undefined

console.log(typeof null) // "object" (not "null" for legacy reasons)
console.log(typeof undefined) // "undefined"
console.log(null === undefined) // false
console.log(null == undefined) // true
console.log(null === null) // true
console.log(null == null) // true
console.log(!null) // true
console.log(Number.isNaN(1 + null)) // false
console.log(Number.isNaN(1 + undefined)) // true
