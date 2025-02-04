let a = { prop: 1 };

function suma(n){
    n.prop++;
}
suma(a);
console.log(a);

//los datos primitivos se copian
//los de referencia se referencian