class Professor {
    constructor(nome, email, curso) {
        this.nome = nome;
        this.email = email;
        this.curso = curso;
    }
}

let professor = {
    "nome": "",
    "email": "",
    "curso": ""
}

let arrProfessor = [];
let cont = 0;

document.getElementById("inserirProfessor").onclick = function () { insert_Professor(); };
document.getElementById("eliminaProfessor").onclick = function () { elimina_Professor(); };
document.getElementById("muda").onclick = function () { muda_Professor() };



function insert_Professor() {
    cont++;


    //INPUTS
    let nome = document.getElementById("nomeProfessor").value;
    let email = document.getElementById("emailProfessor").value;
    let curso = document.getElementById("cursoProfessor").value;

    let professor = new Professor(nome, email, curso)
    // CRIA ELEMENTOS DE FORMA DINAMICA!
    arrProfessor.push(professor);

    let element = document.createElement('tr');
    document.getElementById("mostrarProfessor").appendChild(element);

    let numeroProfessor = document.createElement('td');
    numeroProfessor.innerHTML = cont;
    element.appendChild(numeroProfessor);

    let nomeElement = document.createElement('td');
    nomeElement.innerHTML = professor.nome;
    element.appendChild(nomeElement);

    let emailElement = document.createElement('td');
    emailElement.innerHTML = professor.email;
    element.appendChild(emailElement);

    let curosElement = document.createElement('td');
    curosElement.innerHTML = professor.curso;
    element.appendChild(curosElement);

    let hr = document.createElement('hr');
    element.appendChild(hr);

}

function muda_Professor() {

    let numeroProfessorMudar = document.getElementById("numeroProfessorMudar").value;

    let MudaNome = document.getElementById("MudaNome").value;
    let MudaEmail = document.getElementById("MudaEmail").value;
    let MudaCurso = document.getElementById("MudaCurso").value;

    console.log(numeroProfessorMudar, MudaNome);
    console.log(numeroProfessorMudar, MudaEmail);
    console.log(numeroProfessorMudar, MudaCurso);

    arrProfessor[numeroProfessorMudar - 1].nome = MudaNome;
    arrProfessor[numeroProfessorMudar - 1].email = MudaEmail;
    arrProfessor[numeroProfessorMudar - 1].idade = MudaCurso;

    console.log(arrProfessor);
}

function elimina_Professor() {

    let numeroProfessorEliminar = document.getElementById("numeroProfessorEliminar").value;
    //console.log(numeroProfessorEliminar)
    arrProfessor.splice(numeroProfessorEliminar - 1, 1)

    console.log(arrProfessor);

    let ProfessorEliminar = document.getElementById("mostrarProfessor").childNodes[numeroProfessorEliminar];
    console.log(ProfessorEliminar);
    var i = ProfessorEliminar.parentNode.parentNode.rowIndex;
    document.getElementById("mostrarProfessor").deleteRow(numeroProfessorEliminar);
    cont--;
    //Após apagar um número deve atualizar a página e voltar a escrever o array para assim ser mostrados os números corretamente.
}