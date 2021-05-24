const names = require('./4-names')
const sayHi = require('./utils')
const data = require('./alt-export')
require('./mind-fruit')

sayHi(names.john)
sayHi(names.peter)
console.log(names)
console.log(data)


const os = require('os')

//info about current user
const user = os.userInfo()
//returns the system uptime
console.log(`System uptime is ${os.uptime()} seconds`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}