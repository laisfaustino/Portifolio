console.log("Hello World!")

let nome = "Lais"

const sobrenome= "Faustino"

console.log(nome + " " + sobrenome)

nome ="Mariana"

console.log(nome + " " + sobrenome)

let numero1 = 30
let numero2 = 10

console.log(numero1 + numero2)

function dividir(num1,num2){
    if(num2 == 0){
    return "não é possivel dividir por Zero"
}
    return num1/ num2
}
console.log(dividir (10, 5))

const soma = (num1, num2) => num1 + num2

console.log (soma(20, 30))

/* Interpolaçõ de Strings
function tabuada (num1){
    for (let contador = 1; contador <=10; contador ++){
        console.log(`${num1} x ${contador} = ${num1 * contador}´)
    }
}

tabuada(5)*/

const nomes = ["Guilherme", "Lais", "Jamille"]

nomes.forEach (nome => console.log(nome))
