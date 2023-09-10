class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(
      `Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`
    );
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(
      `${this.nome} está gerenciando o departamento ${this.departamento}.`
    );
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(
      `${this.nome} está programando na linguagem ${this.linguagem}.`
    );
  }
}

// Criar instâncias de um gerente e de um desenvolvedor
const gerente1 = new Gerente("Maria", 40, "Gerente", "TI");
const desenvolvedor1 = new Desenvolvedor(
  "Pedro",
  25,
  "Desenvolvedor",
  "Python"
);

// Chamar métodos  para cada funcionário
gerente1.seApresentar();
gerente1.trabalhar();
gerente1.gerenciar();

desenvolvedor1.seApresentar();
desenvolvedor1.trabalhar();
desenvolvedor1.programar();
