;console.log('From p1 app.js')
;

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to homepag')
  }
  if (req.url === '/about') {
    res.end('stori')
  }
  res.end(`<h1>OBS</h1><a heref="/">go hom</a>`)
})

server.listen(5000)
