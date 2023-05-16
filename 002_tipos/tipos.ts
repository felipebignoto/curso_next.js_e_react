//string
let nome = 'joão'
console.log(nome)


//numbers
let idade = 27
//idade = 'ana'
idade = 27.6
console.log(idade)


///boolean
let valorLogico = false
//valorLogico = 1
console.log(valorLogico)


//tipos explicitos
let minhaIdade: any //: number
minhaIdade = 27
console.log(minhaIdade)
minhaIdade = "minha idade é 27"
console.log(minhaIdade)


//Array
let hobbies=["cozinhar","praticar esportes","ler"];
console.log(hobbies[1]);
//console.log(typeof hobbies);
//outra forma
let numeros: number[] = [1,2,3];
console.log(numeros[2]);
//console.log(typeof numeros);


///Tupla - array de tipos de quantidade pre definidas
let endereco:[string,number] = ["Av principal",99];
console.log(endereco[1]);
console.log(typeof endereco);


//enums
enum cor{
    cinza,
    verde = 50,
    azul
}
let minhaCor = cor.verde
console.log(minhaCor);
console.log(cor.azul);
console.log(cor.cinza);


//Any
let carro: any = 'bmw'
console.log(carro);
carro = {marca: "bmw", ano: 2019};
console.log(carro);