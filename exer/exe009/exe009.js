let botao = document.getElementById('botao')
let num1 = document.getElementById('numeroInput')
let num2 = document.getElementById('numeroInput2')
let num3 = document.getElementById('numeroInput3')

botao.addEventListener('click', () => onButtonTap())

function onButtonTap(){
    let result1 = ((parseInt(num1.value) * parseInt(num2.value))) * (parseInt(num1.value / 2))
    let result2 = (parseInt(num1.value) * 3) + parseFloat(num3.value)
    let result3 = parseFloat(num3.value) ** 3
    window.alert(`a: ${result1} , nb ${result2} e nc ${result3} `)
}