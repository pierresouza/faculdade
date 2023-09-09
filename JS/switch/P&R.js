var bebida = "café";

switch (bebida) {
  case "Leite":
    console.log("A bebída escolhida foi leite, o valor a se pagar é R$ 3,00");
    break;
  case "café":
    console.log("A bebída escolhida foi café, o valor a se pagar é R$ 2,50");
    break;
  case "chá":
    console.log("A bebída escolhida foi chá, o valor a se pagar é R$ 3,50");
    break;
  default:
    console.log("A bebida escolhida não existe, escolha algo entre café, leite ou chá");
}
