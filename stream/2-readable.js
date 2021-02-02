const {Readable}= require('stream');

const instream= new Readable({
    read(){
       // let i=0;
        //while (i<=10){
           // tes=i.toString();
           
            this.push("makan acar"); //ini akan dilakukan sampai ada null, arg harus string?
            //i++; 
       // }
            this.push(null);
           
        
    }
})

instream.pipe(process.stdout)