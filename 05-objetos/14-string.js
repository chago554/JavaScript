let saludo = "Hola mundo";

console.log(saludo.includes("la")); //verifica que existe algo
//si no existe es por que es menor a 0 
//o mejor dicho -1

if(saludo.indexOf("la") >= 0){
    console.log("Existe");
}else{
    console.log("Inexistente");

}




console.log(saludo.length); //retorna la longitud del string
console.log(saludo.indexOf("mu"));//indice de donde se encustra

let nombre = prompt("Permitame su nombre: ")
console.log(saludo.replace("mundo", nombre));  //remplaza un texto

console.log(saludo.toLowerCase()); //todo a min
console.log(saludo.toUpperCase()); //todo a may

let espacios = "     Hola        "; //quita lo espacios
console.log(espacios.trim());

