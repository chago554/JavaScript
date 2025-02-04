const punto = {
    x: 10,
    y: 15,
    dibujar(){
        console.log("dubujando");
    }
};

delete punto.dibujar; // se usa delete para eliminar una propiedad 

if('dibujar' in punto){ //in se usa para verificar que exista una propiedad o metodo dentro de un objeto
    punto.dibujar();
}else{
    console.log("no existe ningun metodo dibujar");
}

//con Objecto.keys podemos listar las propiedades de un objeto
console.log(Object.keys(punto));

//podemos listar las propiedades y sus valores
for(let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);   
}

//tambien se pude usar el Object.entries()
for(let entry of Object.entries(punto)){
    console.log(entry);
}