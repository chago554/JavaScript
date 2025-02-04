/*
Crear algoritmo que devuelva un array de objetos en base a pares
*/

function toCollection(arrPares) {
    let collection = [];
    for(let indice in arrPares){
        let elemento = arrPares[indice];
        collection[indice] = elemento[1];
        collection[indice].id = elemento[0];
    }
    return collection;
}

let pares = [
  [1, { name: "Santiago"}],
  [2, { name: "Lucas" }],
  [3, { name: "Manuel" }]   
];
console.log(toCollection(pares));
