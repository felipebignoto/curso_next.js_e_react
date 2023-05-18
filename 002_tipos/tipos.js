"use strict";
//string
let nome = 'joão';
console.log(nome);
//numbers
let idade = 27;
//idade = 'ana'
idade = 27.6;
console.log(idade);
///boolean
let valorLogico = false;
//valorLogico = 1
console.log(valorLogico);
//tipos explicitos
let minhaIdade; //: number
minhaIdade = 27;
console.log(minhaIdade);
minhaIdade = "minha idade é 27";
console.log(minhaIdade);
//Array
let hobbies = ["cozinhar", "praticar esportes", "ler"];
console.log(hobbies[1]);
//console.log(typeof hobbies);
//outra forma
let numeros = [1, 2, 3];
console.log(numeros[2]);
//console.log(typeof numeros);
///Tupla - array de tipos de quantidade pre definidas
let endereco = ["Av principal", 99];
console.log(endereco[1]);
console.log(typeof endereco);
//enums
var cor;
(function (cor) {
    cor[cor["cinza"] = 0] = "cinza";
    cor[cor["verde"] = 50] = "verde";
    cor[cor["azul"] = 51] = "azul";
})(cor || (cor = {}));
let minhaCor = cor.verde;
console.log(minhaCor);
console.log(cor.azul);
console.log(cor.cinza);
//Any
let carro = 'bmw';
console.log(carro);
carro = { marca: "bmw", ano: 2019 };
console.log(carro);
