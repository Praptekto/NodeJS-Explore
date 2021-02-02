const e= require('events');
const te=require('events');

const emitter = new e;

function print(q){
    console.log(q)
}

emitter.addListener("kkk", print) //ini ada listener
emitter.on("kkk", print) 


emitter.emit("kkk", "hiaa")


const ttt = new te;
ttt.setMaxListeners(2)

function print(q){
    console.log(q)
}
const rrr="kkk";
ttt.addListener("kkk", print)

ttt.on(rrr, print)



ttt.emit("kkk", "hiaapp","mantap") // saat disini kita kasih 2 argumen,fungsi di bagian *1 akan menerima argumen sejumlah n parameter, dimana n <= jumlah argumen
                                    
