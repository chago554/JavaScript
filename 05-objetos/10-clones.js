let punto = {
  x: 10,
  y: 15,
};

let clone = Object.assign({}, punto, {z: 20});
console.log(punto, clone);


//Otra manera 
let copia = {...punto};
console.log(punto);


