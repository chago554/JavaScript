/*
Crear algoritmo que tome un array de objetos 
y devuelva un array de valores
*/

function arrayPares(array) {
  let salida = [];
  for (let indice in array) {
    let elemento = array[indice];
    salida[indice] = [elemento.id, elemento];
  }
  // return salida;
  return salida;
}

let arrayObjetos = [
  {
    id: 8,
    name: "Santiago",
  },
  {
    id: 2,
    name: "Jesus",
  },
  {
    id: 3,
    name: "Josue",
  },
];

console.log(arrayPares(arrayObjetos));
