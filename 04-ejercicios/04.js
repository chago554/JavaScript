//Obtener los numero impares del 0 al 10
let i = 0;
let array = [];
let f = 0;
while (i < 10) {
  if (i % 2 !== 0) {
    //console.log(i);
    array[f] = i;
    f++;
  }
  i++;
}
console.log(array);
