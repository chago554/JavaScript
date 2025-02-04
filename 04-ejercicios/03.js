/*
Obtener el elemento por el indice, donde se pasa el array y el indice. El indice no debe ser menor a 0, ni ser mayor a la longitud del array
*/

function obtenerElemento(array, indice) {
  if (indice >= 0 && indice <= array.length) {
    return array[indice];
  } else {
    return "Indice menor a 0";
  }
}
let arreglo = ["Santiago", "Jesus", "Tomas", "Josue"];
let elemento = obtenerElemento(arreglo, 1);
console.log(elemento);
