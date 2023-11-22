let botao = document.getElementById('botao')
let num1 = document.getElementById('numeroInput')
let num2 = document.getElementById('numeroInput2')
botao.addEventListener('click', () => onButtonTap())

function onButtonTap(){
    let result = parseFloat(num1.value) + parseFloat(num2.value)
    window.alert(`A soma dos numeros ${num1.value} e ${num2.value} é: ${result} `)
}