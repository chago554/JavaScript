let usuario = '';
let nombre = usuario || 'Invitado';
console.log(nombre); // Invitado


function fn01(){
    console.log('fn01');
    return true;
}

function fn02(){
    console.log('fn02');
    return true;
}

let x = fn01() && fn02();
console.log(x); // true