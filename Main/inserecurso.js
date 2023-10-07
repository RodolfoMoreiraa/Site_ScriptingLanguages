class Curso {
    constructor(nome, disciplinas, alunos) {
        this.nome = nome;
        this.disciplinas = disciplinas;
        this.alunos = alunos
    }
}

let curso = {
    "nome": "",
    "disciplinas": "",
    "alunos": ""
}

let arrCurso = [];
let cont = 0;



document.getElementById("inserirCurso").onclick = function () { insert_Curso(); };
document.getElementById("eliminaCurso").onclick = function () { elimina_Curso(); };
document.getElementById("mudaCurso").onclick = function () { muda_Curso() };



function insert_Curso() {
    cont++;

    //INPUTS
    let nome = document.getElementById("nomeCurso").value;
    let disciplinas = document.getElementById("disciplinasCurso").value;
    let alunos = document.getElementById("alunosCurso").value;

    let curso = new Curso(nome, disciplinas, alunos)
    // CRIA ELEMENTOS DE FORMA DINAMICA!
    arrCurso.push(curso);

    let element = document.createElement('tr');
    document.getElementById("mostrarCursos").appendChild(element);

    let numeroCurso = document.createElement('td');
    numeroCurso.innerHTML = cont;
    element.appendChild(numeroCurso);

    let nomeElement = document.createElement('td');
    nomeElement.innerHTML = curso.nome;
    element.appendChild(nomeElement);

    let disciplinasElement = document.createElement('td');
    disciplinasElement.innerHTML = curso.disciplinas;
    element.appendChild(disciplinasElement);

    let alunosElement = document.createElement('td');
    alunosElement.innerHTML = curso.alunos;
    element.appendChild(alunosElement);

}

function muda_Curso() {

    let numeroCursoMudar = document.getElementById("numeroCursoMudar").value;

    let MudaNome = document.getElementById("MudaNome").value;
    let Mudadisciplinas = document.getElementById("Mudadisciplinas").value;
    let MudaAlunos = document.getElementById("MudaAlunos").value;

    console.log(numeroCursoMudar, MudaNome);
    console.log(numeroCursoMudar, Mudadisciplinas);
    console.log(numeroCursoMudar, MudaAlunos);

    arrCurso[numeroCursoMudar - 1].nome = MudaNome;
    arrCurso[numeroCursoMudar - 1].horario = Mudadisciplinas;
    arrCurso[numeroCursoMudar - 1].alunos = MudaAlunos;

    console.log(arrCurso);
}

function elimina_Curso() {

    let numeroCursoEliminar = document.getElementById("numeroCursoEliminar").value;
    //console.log(numeroCursoEliminar)
    arrCurso.splice(numeroCursoEliminar - 1, 1)

    console.log(arrCurso);

    let cursoEliminar = document.getElementById("mostrarCursos").childNodes[numeroCursoEliminar];
    console.log(cursoEliminar);
    document.getElementById("mostrarCursos").deleteRow(numeroCursoEliminar);
    cont--;
    //Após apagar um número deve atualizar a página e voltar a escrever o array para assim ser mostrados os números corretamente.
}