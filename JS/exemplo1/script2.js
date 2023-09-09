let rLSync = require('readline-sync')
let nome = rLSync.question("Qual o seu nome ?\n")

let idade = rLSync.question("Qual a sua idade ?\n")
console.log(`Olá, ${nome} sua idade é ${idade} anos`)