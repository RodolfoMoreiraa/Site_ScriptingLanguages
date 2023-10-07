class Aluno {
    constructor(nome, curso, email) {
        this.nome = nome;
        this.curso = curso;
        this.email = email;
    }
}

let aluno = {
    "nome": "",
    "curso": "",
    "email": "",
}

let arrAluno = [];
let cont = 0;

document.getElementById("inserirAluno").onclick = function () { insert_Aluno(); };
document.getElementById("eliminaAluno").onclick = function () { elimina_Aluno(); };
document.getElementById("muda").onclick = function () { muda_Aluno() };



function insert_Aluno() {
    cont++;


    //INPUTS
    let nome = document.getElementById("nomeAluno").value;
    let curso = document.getElementById("cursoAluno").value;
    let email = document.getElementById("emailAluno").value;

    let aluno = new Aluno(nome, curso, email)
    // CRIA ELEMENTOS DE FORMA DINAMICA!
    arrAluno.push(aluno);

    let element = document.createElement('tr');
    document.getElementById("mostrarAlunos").appendChild(element);

    let numeroAluno = document.createElement('td');
    numeroAluno.innerHTML = cont;
    element.appendChild(numeroAluno);

    let nomeElement = document.createElement('td');
    nomeElement.innerHTML = aluno.nome;
    element.appendChild(nomeElement);

    let cursoElement = document.createElement('td');
    cursoElement.innerHTML = aluno.curso;
    element.appendChild(cursoElement);

    let emailElement = document.createElement('td');
    emailElement.innerHTML = aluno.email;
    element.appendChild(emailElement);


}

function muda_Aluno() {

    let numeroAlunoMudar = document.getElementById("numeroAlunoMudar").value;

    let MudaNome = document.getElementById("MudaNome").value;
    let MudaCurso = document.getElementById("MudaCurso").value;
    let MudaEmail = document.getElementById("MudaEmail").value;

    console.log(numeroAlunoMudar, MudaNome);
    console.log(numeroAlunoMudar, MudaCurso);
    console.log(numeroAlunoMudar, MudaEmail);

    arrAluno[numeroAlunoMudar - 1].nome = MudaNome;
    arrAluno[numeroAlunoMudar - 1].curso = MudaCurso;
    arrAluno[numeroAlunoMudar - 1].email = MudaEmail;

    console.log(arrAluno);
}

function elimina_Aluno() {

    let numeroAlunoEliminar = document.getElementById("numeroAlunoEliminar").value;
    //console.log(numeroAlunoEliminar)
    arrAluno.splice(numeroAlunoEliminar - 1, 1)

    console.log(arrAluno);

    let alunoEliminar = document.getElementById("mostrarAlunos").childNodes[numeroAlunoEliminar];
    console.log(alunoEliminar);
    document.getElementById("mostrarAlunos").deleteRow(numeroAlunoEliminar);
    cont--;
    //Após apagar um número deve atualizar a página e voltar a escrever o array para assim ser mostrados os números corretamente.
}