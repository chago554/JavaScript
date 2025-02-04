function Usuario(){
    this.id,
    this.nombre = 'Juan',

    this.recupuerarClave= function() { //se les llama metodo
        console.log('Recuperando clave');
    }
}

let usuario = new Usuario();
console.log(usuario);