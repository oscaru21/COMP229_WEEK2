const connect = require('connect')

const app = connect()

function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
}

function logger(req, res, next){
    console.log(req.method, req.url)
    next()
}

function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain')
    res.end('Goodbye World')
}

const port = 3000

app.use(logger)
app.use('/hello', helloWorld)
app.use('/goodbye', goodbyeWorld)
app.listen(port)
console.log(`Server running at http://localhost:${port}/`)