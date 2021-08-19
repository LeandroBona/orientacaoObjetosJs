import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Leandro", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteLeandro = new ContaCorrente(1001, cliente1);
contaCorrenteLeandro.depositar(500);
contaCorrenteLeandro.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteLeandro.tranferir(valor, conta2);

console.log(contaCorrenteLeandro);