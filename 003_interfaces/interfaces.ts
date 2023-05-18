interface Humano{
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string):void
}

function saudarComOla(pessoa: Humano){
    console.log("Seja bem vindo, "+ pessoa.nome)
}

function mudarnome(pessoa: Humano){
    pessoa.nome = "Joao"
}

const pessoa:Humano = {
    nome: "Felipe",
    idade: 20,
    saudar(sobrenome:string){
        console.log('ola, meu sobreno é "'+this.nome + " " + sobrenome)
    }
}

saudarComOla(pessoa);
mudarnome(pessoa)
saudarComOla(pessoa);


//Usando classes
class Cliente implements Humano{
    nome: string = ""
    saudar(sobrenome: string){
        console.log("ola meu nome é " + this.nome + " " + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = "Carlos"
saudarComOla(meuCliente)
meuCliente.saudar("Eduardo")

//Interface função
interface FuncaoCalculo{
    (a: number, b:number): number
}
let potencia: FuncaoCalculo
potencia = function(base: number, exp: number):number{
    //Math.pow(3,10)
    //3**10
    return Array(exp).fill(base).reduce((t,a)=>t*a)
}

console.log(potencia(3,10))