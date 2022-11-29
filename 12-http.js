// const { clear } = require('console')
const http=require('http')

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome to our home page")
    }
    if(req.url==='./about'){
        res.end("Here is our short history")
    }
    res.end(`<h1>weeuh! hiyo nitatoa wapi</h1>
    <p>I can't find it</p>
    <a href="/">back to home page</a>
    `)
})
server.listen(5000)