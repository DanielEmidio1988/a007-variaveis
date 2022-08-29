let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

console.log(typeof(nome))
console.log(typeof(idade))
/* (questão C) em ambos os casos, foi declarado undefined, pois eu não defini nenhum valor as variáveis. 
Como defini nome e idade como let, */ 

/* (questão f) em ambos os casos, foi declarado String. Isto ocorreu porque agora eu declarei um valor
as duas variáveis.
*/
console.log("Meu nome é", nome," e tenho", idade, "anos.")