//returnar  el numero menor y mayor de un array

function mayoryMenor(array) {
  let menor = array[0];
  let mayor = array[0];

  for (elemento of array) {
    menor = menor < elemento ? menor : elemento;
    mayor = mayor > elemento ? mayor : elemento;
  }
  return [menor, mayor];
}

let array = [2, 5, 7, 15, -5, -8, 50];

console.log(mayoryMenor(array));
