//import http core module
const http = require('http')
const fs = require('fs')

//define local server address and port
const hostname = '127.0.0.1'
const port = 3000

//create a new server instance and define a callback function to return the http response
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"})
    fs.readFile('index.html', (error, data) => {
        if(error){
            res.writeHead(404)
            res.write('Error: File not found!')
        }else{
            console.log('reading html')
            res.write(data)
        }

        res.end()
    })
})

server.listen(port, hostname, (error) => {
    if(error){
        console.log('Something went wronmg' + error);
    }else{
        console.log(`Server running at http://${hostname}:${port}/`);
    }
})