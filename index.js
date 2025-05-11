const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        let data = fs.readFileSync('home.html')
        res.writeHead(200, {'content-type':'text/html'})
        res.write(data)
        res.end()
    } else if(req.url === '/about') {
        let data = fs.readFileSync('about.html')
        res.writeHead(200, {'content-type':'text/html'})
        res.write(data)
        res.end()
    } else if(req.url === '/contact') {
        let data = fs.readFileSync('contact.html')
        res.writeHead(200, {'content-type':'text/html'})
        res.write(data)
        res.end()
    } else if(req.url === '/terms') {
        let data = fs.readFileSync('terms.html')
        res.writeHead(200, {'content-type':'text/html'})
        res.write(data)
        res.end()
    } else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})
server.listen(8080)
console.log('Server successfully running')