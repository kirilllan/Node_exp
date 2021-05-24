;console.log('From p1 app.js')
;
const names = require('./4-names')
const sayHi = require('./utils')

sayHi(names.john)
sayHi(names.peter)
console.log(names)
//console.log(__dirname)//current directory
//console.log(__filename)//file name
//console.log(module)//current module (file)
//console.log(process)//env where prog being executed