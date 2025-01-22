
const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("pooju")
})
const port=8000
server.listen(port,()=>{
    console.log(`my server is running on http://localhost:${port}`)
});
