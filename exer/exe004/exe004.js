let botao = document.getElementById('botao')
let num1 = document.getElementById('numeroInput')
let num2 = document.getElementById('numeroInput2')
let num3 = document.getElementById('numeroInput3')
let num4 = document.getElementById('numeroInput4')
botao.addEventListener('click', () => onButtonTap())

function onButtonTap(){
    let result = (parseFloat(num1.value) + parseFloat(num2.value) + parseFloat(num3.value) + parseFloat(num4.value)) / 4
    window.alert(`A media foi de: ${result} `)
}