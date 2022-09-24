const http = require('http');
const server = http.createServer(function(req, res){
 
    res.write(randomTiv(1,100000).toString());
    res.end()
})
server.listen(8080);


function randomTiv(min,max,){
   
    return  Math.floor(Math.random() * (max - min + 1) + min)

}

