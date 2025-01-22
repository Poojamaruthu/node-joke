console.log("hello pooju");
const os = require('os')
const path = require('path')
console.log(os)
console.log(__dirname)
console.log("---------------------------")
console.log(__filename)

// const math = require('./math')
// console.log(math.add(3,3))

const {add,sub,mul,div}=require('./math')
console.log(add(3,3))