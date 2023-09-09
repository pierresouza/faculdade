var s = "Javascript e Python";

var pos1 = s.indexOf("Python");

var novaString = s.substring(13, 19);
console.log(novaString);

var frase = "Olá mundo";

if (frase.startsWith("Olá")) {
  let sub = frase.substring(4);
  let novaString = sub.replace("mundo", "pessoal");
  let novaStringMaisucula = novaString.toUpperCase();
  console.log(novaStringMaisucula);
}
