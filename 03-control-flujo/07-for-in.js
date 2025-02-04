let user = {
  id: 1,
  name: "Santiago",
  age: 20,
};

for (let prop in user) {
  //Itera sobre las propiedades del objeto
  console.log(prop); //Imprime el nombre de la propiedad
  console.log(prop, user[prop]); //Imprime el valor de la propiedad
}
