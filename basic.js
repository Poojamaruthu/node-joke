const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log(req)
// })
// server.listen(4000);

const server = http.createServer((req,res)=>{

    const url =req.url
    const method=req.method
    const fs= require('fs')
    if(url === '/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head> <title>poojus form </title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>')
        res.write('</html>')
       return res.end()
    }
    
    if (url==='/message' && method == 'POST') {

        const body = [ ];
        req.on('data', (chunk)=>{
        body.push(chunk)
        console.log(chunk);
        })
        req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        
        const message = parsedBody.split('=')
        console.log(message[1]);
        fs.writeFileSync('hello.txt',message[1])
        fs.writeFileSync('hello.txt', 'DUMMY');
        })

        // req.on('data',(chunk)=>{
        //     console.log('chunk:',chunk);
            
        // })
       
        res.setHeader('Location', '/')
        res.statusCode = 302;
        // console.log(req);
        
        return res.end();
        }



    res.setHeader('Content-type','text/html');
    res.write('<html>')
    res.write('<head> <title>poojus server </title><head>')
    res.write('<body><h1>hello from server<h2><body>')
    res.write('</html>')
    res.end()
})
server.listen(4000);