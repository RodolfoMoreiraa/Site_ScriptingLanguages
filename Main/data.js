const fs = require('fs');
let array = []

document.getElementById("enviar").addEventListener("click",adduser);

function adduser(){

    let objeto = {
        "nome": "",
        "email": "",
        "password": "",
    };

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    objeto.nome = nome;
    objeto.email = email;
    objeto.password = password;

    array.push(objeto);

    console.log(array);
}
