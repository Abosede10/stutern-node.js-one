// Importing the http module 
const http = require('http')

// importing the file system module to write and read file on the browser
const fs = require('fs')

var PORT = process.env.PORT || 8080

// created my server with the request and response
const server = http.createServer((req, res)=>{
    
    // created a path variable to check for client routing
    let path = './views/'

    // using a switch statement to check the page the client wants to view and return 404 error if page not found

    switch(req.url){ //req.url use to get the requested url made by the user and return the path
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact-me':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html'; 
            break;
    
    }

    // Setting response and file to display on the browser
    res.setHeader('content-type', 'text/html')
    fs.readFile(path, (err, data)=>{ // the path to display, err if any, and the data to display 
        if(err){
            console.log(err) // this returns any err if it fails
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })

 })//.listen(process.env.PORT || 8080)  listening from port localhost:8080





// listening from port localhost:8080
// server.listen(8080, 'localhost', () =>{
//     // console.log('listening')
// })

server.listen(PORT,() =>{
     console.log('listening')
})
