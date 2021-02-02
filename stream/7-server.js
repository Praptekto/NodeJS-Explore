const fs =require("fs");
const http=require("http");
const path=require("path");

const file = path.resolve(__dirname, "../assets/sample.txt");

const server=http.createServer();

server.on('request', function(req, res) {
    const readStream = fs.createReadStream(file);
    readStream.pipe(res);
  })


server.listen(8787);
