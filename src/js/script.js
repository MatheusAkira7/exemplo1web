// //Declarações e variáveis
// //var, let e const 

const { captureOwnerStack } = require("react");

// var nome="Fiap";
// console.log(nome);

// var nome="Teste"
// console.log(nome);

// if(true){
//     let apelido="Fiapinho"
//     console.log(apelido);
// }

// const taxaJuros=0.05;
// console.log(taxaJuros);
// //taxaJuros=1.5;

// var exemplo="ola-dev-var";
// console.log(typeof exemplo);
// let exemplo1="ola-dev-let";
// console.log(exemplo1);
// const exemplo2="ola-dev-let";
// console.log(exemplo2);

// let exemplo3=10;
// console.log(exemplo3);

// let exemplo4=true
// console.log(exemplo4);

// let exemplo5={nome1:"teste"};
// console.log(typeof exemplo5);

// let exemplo6=["Java","C#","PHP"];
// console.log(exemplo6);

// //valor undefined
// let exemplo7;
// console.log(exemplo7)

// //valor vazio
// let exemplo8 =null;
// console.log(exemplo8)

// //OPERADORES ARITIMÉTICOS

// const valor1=10;
// const valor2=20;

// console.log( valor1 + valor2);
// console.log( valor1 - valor2);
// console.log( valor1 * valor2);
// console.log( valor1 / valor2);

// //OPERADORES LÓGICOS
// // = atribução
// // == comparação
// // === valor e tipo(estritamente igual)
// // && = E (todas condições tem que ser verdadeiras)
// // || = OU (uma das condição tem que ser verdadeira)

// console.log(valor1 < valor2);
// console.log(valor1 > 10 && valor2< 10);
// console.log(valor2 < 100 || valor1 >10);
// console.log(valor1 == valor2);
// console.log(valor2 === valor1);

// //Exercicio 1 

// let p =100;
// console.log(p);
// let v =0.20;
// console.log(v);
// let valorFinal = p - p * v;
// console.log("O preço final com desconto é",valorFinal);

// //Exercicio 2 
// const a =20;
// const b =11;
// console.log(a == 20 && b >=10);

// //Exercicio 3 
// var user_login=true;
// var user_password=true;
// if(user_login == true){
//     console.log("Transação Realizada")
// }




// Estrutura Condicional


//if

if(true){
    console.log("verdadeiro")
}
let nome ="fiap";
if(nome =="fiap"){
    console.log("Nome Correto")
}

//if/else

if(nome =="fiap"){
    console.log("Usuario Correto")
}else{
    console.log("Usuario Errado")
}

// if encadeado/aninhado

let idade = 17;

if(idade <=17){
    console.log("é uma criança")
}else if(idade >13 && idade <=18){
    console.log("é um adoslescente")
}else{
    console.log("é um adulto")
}else if(idade >18 &&  idade <=65){
    console.log("é um adulto")
}else{
    console.log("é um idoso")
}

//Switch Case

let pratos="salada";

switch(pratos){
    case "macarrao":
    console.log("a melhor massa")
    break;
    case "lasanha":
    console.log("melhor prato")
    break;
default:
    console.log("nenhuma das opções")
}

//ternario
/*
? = if
: =else

*/
let valor = 100
let resultado = valor ==100 ? "Valor Certo": "Valor Errado";
console.log(resultado)

let usuario="dev"
let logado= usuario =="dev"? "Usuario Logado":"Usuario Invalido";
console.log(logado)


//estrutura de repetição
//o laço de repetição é utilizado quando
// sabemos quantas vezes o código vai ser executado

for( let i=1; i<=5;i++){
    console.log("valor",i);
}
const linguagens= ["Java","Python","C#"]

for(let i=0; i <linguagens.length;i++){
    console.log("Linguagem", i,":",linguagens[i])
}

const tecnologias =["JS","HTML","CSS"];
for( let tec of tecnologias){
    console.log("Estudando:",tec)
}

const carros= {marca:"Volks",modelo:"Fusca", ano:1980};

for( let dados in carros ){
    console.log(dados,":", carros[dados])
}


//while - usamos quando não sabemos a quantidade de vezes

let numero = 1;

while (numero <=10){
    console.log("contagem",numero);
    numero++;
}

//declarando uma variavel indefinida
let num;
//enquanto numero não for 0 ele continua rodando
while(num !== "0"){
    num = prompt("Digite um  numero ou 0 para sair")
    console.log("você digitou", num)
}
