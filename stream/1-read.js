const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, "../assets/sample.txt");

const readStream = fs.createReadStream(file);

// readStream.on("data", function(chunk) {
//   console.log("reading chunk");
//   console.log(chunk.toString() + "\n");
// });

readStream.pipe(process.stdout);