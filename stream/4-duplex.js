const { read } = require("fs");
const {Duplex}= require("stream");
//Urutan read sama write kaga ngefek kata mas hasan
const duplexStream=new Duplex({
    //kita mabil dari 2 dan 3(read dan write stream)
    write(chunk, encoding , callback){ // ini adalah salah satu event 
        console.log(chunk.toString());
        callback();
    },
    read(){
        this.push(String.fromCharCode(this.currentCharCode++));
        if (this.currentCharCode>90){
            this.push(null);
        }

    }
    
})

duplexStream.currentCharCode=1; //65 adalah huruf a, sebelum 65 itu karakter
process.stdin.pipe(duplexStream).pipe(process.stdout);