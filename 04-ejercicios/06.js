/*
Crear algoritmo que devuelva la cantidad de numero positivos en un array
*/
let array = [1, -50, 8, 41 ,-95, 54];
function contarNumeroPositivos(array){
    let  cantidad = 0;
    for(elemento of array){
        cantidad = elemento >= 0 ? cantidad+1: cantidad = cantidad;
    }
    return cantidad;
}
console.log(contarNumeroPositivos(array));