function Usuario(nombre){
    this.nombre =nombre
}

const U = Usuario;

let user = new U('Jesus')
console.log(user);

//Se pueden pasar funciones a otros funciones como argumentos

function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, 'Juan');
console.log(user1);


//ademas se pueden retornar dentro de otra funcion
function returned(){
    return  function(){
        console.log("hola mundo");
    }
}

let saludo = returned();
saludo();