"use strict";
function saudarComOla(pessoa) {
    console.log("Seja bem vindo, " + pessoa.nome);
}
function mudarnome(pessoa) {
    pessoa.nome = "Joao";
}
const pessoa = {
    nome: "Felipe",
    idade: 20,
    saudar(sobrenome) {
        console.log('ola, meu sobreno é "' + this.nome + " " + sobrenome);
    }
};
saudarComOla(pessoa);
mudarnome(pessoa);
saudarComOla(pessoa);
//Usando classes
class Cliente {
    constructor() {
        this.nome = "";
    }
    saudar(sobrenome) {
        console.log("ola meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Carlos";
saudarComOla(meuCliente);
meuCliente.saudar("Eduardo");
let potencia;
potencia = function (base, exp) {
    //Math.pow(3,10)
    //3**10
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
