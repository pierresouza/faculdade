// 1- forma de criar objeto

const pessoa = {
  nome: "Pierre",
  sobrenome: "Souza",
};
console.log(pessoa["sobrenome"]);

//2 - segunda forma de crira objetos
const funcionario = new Object();
funcionario.nome = "Karen";
funcionario.sobrenome = "Joana";

console.log(funcionario.nome);

//3 - forma de criar objetos
function criarPessoa(nome, sobrenome, i) {
  return {
    nome,
    sobrenome,
    idade: i,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criarPessoa("Artur", "Silva", 20);
const p2 = criarPessoa("Joãor", "Silva", 34);

console.log(p1.nomeCompleto());
console.log(p2);
