let botao = document.getElementById('botao')
botao.addEventListener('click',() => onButtonTap())


function onButtonTap(){
    let numeroInput = document.getElementById('numeroInput')
    window.alert(`O numero informado foi ${numeroInput.value}`)
}