let botao = document.getElementById('botao')
let raio = document.getElementById('numeroInput')
botao.addEventListener('click',() => onButtonTap())

function onButtonTap(){
    let area = 3.14 *(parseFloat(raio.value) **2)
    window.alert(`A área de um círculo de raio ${raio.value} é de ${area} `) 
}