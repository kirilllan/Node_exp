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


// --12-HTTP
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