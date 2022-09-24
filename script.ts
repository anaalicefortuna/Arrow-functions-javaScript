
import PromptSync = require('prompt-sync')

const prompt = PromptSync()

const imc = (peso: number, altura: number) => { return peso / (Math.pow(altura, 2));
}

const peso = Number(prompt('Digite o peso: '));

const altura = Number(prompt('Digite a altura: '));

const resultadoIMC = imc(peso, altura)
console.log(`O calculo do IMC é: ${resultadoIMC}`);