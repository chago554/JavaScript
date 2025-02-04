/*
Crear algoritmo que devuelva el precio del producto mas el impuesto
*/
function precioImpuesto(precio, impuesto){
    let total = precio +  (precio * impuesto);
    return total;
}

console.log(precioImpuesto(100, 0.16));