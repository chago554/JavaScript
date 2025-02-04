function Punto(x, y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){
        console.log("dibujando...");
    }
}


let punto = {z:7};
//Punto.call(punto, 1, 2); //call sirve para agregar
Punto.apply(punto, [1, 2]); //apply sirve para lo mismo solo que se agregan como un array

console.log(punto);