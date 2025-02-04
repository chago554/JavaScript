const user = {
    id: 1,
}

user.name = 'Juan';
user.guardar = function(){
    console.log('Guardando...', user.name);
}


const user2 = Object.freeze({// Object.freeze() no puede cambiar el objeto, ni atributos ni métodos
    name: 'Juan',
});   


const user3 = Object.seal({// Object.seal() permite cambiar los valores de los atributos, pero no se pueden agregar ni eliminar atributos
    name: 'Juan',
    saludar: function(){
        console.log('Hola');
    }
});


