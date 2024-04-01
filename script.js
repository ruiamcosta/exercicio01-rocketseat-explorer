const number1 = prompt('Insira o primeiro número')
const number2 = prompt('Insira o segundo número')

const addition = Number(number1) + Number(number2)
const subtraction  = Number(number1) - Number(number2)
const multiplication = Number(number1) * Number(number2)
const division = Number(number1) / Number(number2)
const remainder = Number(number1) % Number(number2)

alert(`A soma de ${number1} com ${number2} é de ${addition}`)
alert(`A subtração de ${number1} com ${number2} é de ${subtraction}`)
alert(`A multiplicação de ${number1} com ${number2} é de ${multiplication}`)
alert(`A divisão de ${number1} com ${number2} é de ${division}`)
alert(`O resto da divisão de ${number1} com ${number2} é de ${remainder}`)

if(addition % 2) {
  alert(`A soma de ${number1} com ${number2} é par.`)
} else {
  alert(`A soma de ${number1} com ${number2} é impar`)
}

if(Number(number1) === Number(number2)) {
  alert('Os números inseridos são iguais.')
} else {
  alert('Os números inseridos são diferentes.')
}
