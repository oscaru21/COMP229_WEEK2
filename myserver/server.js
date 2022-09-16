//import http core module
const http = require('http')

//define local server address and port
const hostname = '127.0.0.1'
const port = 3000

//create a new server instance and define a callback function to return the http response
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!\n')
})

//start listening for incoming requests
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})