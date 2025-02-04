/*
Crear un array de longitud N y que sus elementos sean del 1 hasta N
*/
function longitudArray(longitudArray) {
  if (longitudArray <= 0) {
    return "Escribe un numero mayor a 0";
  }
  let array = [];
  for (let i = 0; i < longitudArray; i++) {
    array[i] = i + 1;
  }
  return array;
}
let respuesta = longitudArray(8);
console.log(respuesta);
