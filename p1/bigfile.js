// ---- 9-path-module.js
/* const path = require('path')

const filePath = path.join('/content', 'subfolder', 'test.txt')

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute) */


// ---- 10-fs-sync.js
/* const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, second: ${second}`, {flag: 'a'})

console.log('done with this task')
console.log('starting next task') */


// -----11 fs-async
/* const { readFile, writeFile } = require('fs')

console.log(start)
readFile('./content/first.txt', 'utf8', (err, res) => {
  if (err) {
    return
  }
  const first = res;
  readFile('./content/second.txt', 'utf8', (err, res) => {
    if (err) return
    const second = res
    writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, res) => {
      if (err) return
      console.log('done with thhis task')
    })
  })
})
console.log('starting next task') */


// ----12-HTTP
/* const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to homepag')
  }
  if (req.url === '/about') {
    res.end('stori')
  }
  res.end(`<h1>OBS</h1><a heref="/">go hom</a>`)
})

server.listen(5000) */


// ---- file manipulation
// creates a file with content + content from other files
// "'THIS IS AWSUM' Halo dis iz firzt tex file second txt file in content/secont.txt"
/* const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
  try {
    const first = await readFilePromise('./content/first.txt')
    const second = await readFilePromise('./content/second.txt')
    await writeFilePromise('./content/result-mind-fruit.txt', `'THIS IS AWSUM' ${first} ${second}`)
    console.log(first, second)
  } catch (err) {
    console.log(err)
  }
}
start() */

/* const getText = path => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
  })
  })
}

getText('./content/first.txt')
  .then((result) => console.log(result))
  .catch(err=>console.log(err)) */


// ---- EventEmitter
/* const EventEmitter = require('events')
const customEmitter = new EventEmitter()
customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id:${id} `);
})
customEmitter.on('response', () => {
  console.log(`some other logic.. `);
})
customEmitter.emit('response', 'john', 44) */