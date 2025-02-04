let personajes = {
    nombre: 'Goku',
    poder: 'Kamehameha',
    raza: 'Saiyajin',
    edad: 35,
    estaVivo: true,
    amigos: ['Vegeta', 'Gohan', 'Krillin'] // Array
};

console.log(personajes);
console.log(personajes.nombre); // Goku
console.log(personajes.amigos[0]); // Vegeta

//Agregar una propiedad
personajes.peso = 80.5;

//Modificar una propiedad
personajes.edad = 36;

// Eliminar una propiedad
delete personajes.raza;

