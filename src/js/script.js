//Declarações e variáveis
//var, let e const 

var nome="Fiap";
console.log(nome);

var nome="Teste"
console.log(nome);

if(true){
    let apelido="Fiapinho"
    console.log(apelido);
}

const taxaJuros=0.05;
console.log(taxaJuros);
//taxaJuros=1.5;

var exemplo="ola-dev-var";
console.log(typeof exemplo);
let exemplo1="ola-dev-let";
console.log(exemplo1);
const exemplo2="ola-dev-let";
console.log(exemplo2);

let exemplo3=10;
console.log(exemplo3);

let exemplo4=true
console.log(exemplo4);

let exemplo5={nome1:"teste"};
console.log(typeof exemplo5);

let exemplo6=["Java","C#","PHP"];
console.log(exemplo6);

//valor undefined
let exemplo7;
console.log(exemplo7)

//valor vazio
let exemplo8 =null;
console.log(exemplo8)

//OPERADORES ARITIMÉTICOS

const valor1=10;
const valor2=20;

console.log( valor1 + valor2);
console.log( valor1 - valor2);
console.log( valor1 * valor2);
console.log( valor1 / valor2);

//OPERADORES LÓGICOS
// = atribução
// == comparação
// === valor e tipo(estritamente igual)
// && = E (todas condições tem que ser verdadeiras)
// || = OU (uma das condição tem que ser verdadeira)

console.log(valor1 < valor2);
console.log(valor1 > 10 && valor2< 10);
console.log(valor2 < 100 || valor1 >10);
console.log(valor1 == valor2);
console.log(valor2 === valor1);

//Exercicio 1 

let p =100;
console.log(p);
let v =0.20;
console.log(v);
let valorFinal = p - p * v;
console.log("O preço final com desconto é",valorFinal);

//Exercicio 2 
const a =20;
const b =11;
console.log(a == 20 && b >=10);

//Exercicio 3 
var user_login=true;
var user_password=true;
if(user_login == true){
    console.log("Transação Realizada")
}
