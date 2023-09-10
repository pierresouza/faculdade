class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log("já está ligado");
      return;
    }
    this.ligado = true;
  }
}
