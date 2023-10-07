// data.js

const fs = require('fs'); 


let cursos = [
  {id: 1, nome: 'segurancarodoviaria'},
  {id: 2, nome: 'cursodeinstrutor'},
];



try {
  cursos = JSON.parse(fs.readFileSync('cursos.json'));
} catch (error) {
  console.error('Erro ao ler o arquivo de cursos:', error);
}
  
function adicionarCurso(nome) {
  let id = cursos.length + 1;
  let curso = {id: id, nome: nome};
  cursos.push(curso);
  
  // Salva a lista de cursos em cursos.json
  try {
    fs.writeFileSync('cursos.json', JSON.stringify(cursos));
  } catch (error) {
    console.error('Erro ao salvar o arquivo de cursos:', error);
  }
  
    return curso;
  }
  
  
let professores = [
  {id: 1, nome: 'João da Silva'},
  {id: 2, nome: 'Maria Santos'},
  ];


try {
  professores = JSON.parse(fs.readFileSync('professores.json'));
} catch (error) {
  console.error('Erro ao ler o arquivo de professores:', error);
}
  
function adicionarProfessor(nome) {
  let id = professores.length + 1;
  let professor = {id: id, nome: nome};
  professores.push(professor);
  
  // Salva a lista de professores em professores.json
  try {
    fs.writeFileSync('professores.json', JSON.stringify(professores));
  } catch (error) {
    console.error('Erro ao salvar o arquivo de professores:', error);
  }
  
    return professor;
  }
  
//function adicionarProfessor(nome) {
//  let id = professores.length + 1;
//  let professor = {id: id, nome: nome};
//  professores.push(professor);
//  console.log(professor)
//  return professor;
//}


  
let alunos = [
  {id: 1, nome: 'Ana Maria', curso: 1},
  {id: 2, nome: 'José Costa', curso: 2},
  {id: 3, nome: 'Roberto Gomes', curso: 3}
];


try {
  alunos = JSON.parse(fs.readFileSync('alunos.json'));
} catch (error) {
  console.error('Erro ao ler o arquivo de alunos:', error);
}
  
function adicionarAluno(nome) {
  let id = alunos.length + 1;
  let aluno = {id: id, nome: nome};
  alunos.push(aluno);
  
  // Salva a lista de alunos em alunos.json
  try {
    fs.writeFileSync('alunos.json', JSON.stringify(alunos));
  } catch (error) {
    fs.writeFileSync('alunos.json', '[]');
    console.error('Erro ao salvar o arquivo de alunos:', error);
  }
  
    return aluno;
  }


  

module.exports = {
  alunos: alunos,
  adicionarAluno: adicionarAluno,
  professores: professores,
  adicionarProfessor: adicionarProfessor,
  adicionarCurso: adicionarCurso
};
