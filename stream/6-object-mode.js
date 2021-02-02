const { Transform } = require('stream');

const splitter = new Transform({
  readableObjectMode: true,

  transform(chunk, encoding, callback) {
    this.push(chunk.toString().trim().split(','));
    callback();
  }
})

const arrayToObject = new Transform({
  writableObjectMode: true,
  readableObjectMode: true,

  transform(chunk, encoding, callback) {
    const obj = {};
    for (let i = 0; i < chunk.length; i+=2) {
      obj[chunk[i]] = chunk[i + 1];
    }
    this.push(obj);
    callback();
  }
})

const objectToString = new Transform({
  writableObjectMode: true,

  transform(chunk, encoding, callback) {
    this.push(JSON.stringify(chunk, null, 2));
    callback();
  }
})

process.stdin
  .pipe(splitter)
  .pipe(arrayToObject)
  .pipe(objectToString)
  .pipe(process.stdout);