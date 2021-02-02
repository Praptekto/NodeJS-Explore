const {Writable}= require('stream');

const outstream = new Writable({
    write(chunk, encoding , callback){
        console.log(chunk.toString());
        callback();// kalo tanpa callback tidak akan memanggil ulang fungsi ini
    }
})


process.stdin.pipe(outstream);