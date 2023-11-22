let botao = document.getElementById('botao')
let num1 = document.getElementById('numeroInput')

botao.addEventListener('click', () => onButtonTap())

function onButtonTap(){
    let result = parseFloat(num1.value) * 100 
    window.alert(`${num1.value}m é igual a: ${result}cm `)
}