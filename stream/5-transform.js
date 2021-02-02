const {Transform}=require("stream");
const initransform=new Transform ({
    transform(inichunk,encoding, inicallback){
        this.push(inichunk.toString().toUpperCase());
        inicallback();

    }
})


//pipekan
process.stdin.pipe(initransform).pipe(process.stdout);