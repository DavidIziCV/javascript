let botao = document.getElementById('botao')
let lado = document.getElementById('numeroInput')
botao.addEventListener('click',() => onButtonTap())

function onButtonTap(){
    let area = parseFloat(lado.value) ** 2
    let dobro = area * 2
    window.alert(`O dobro da área de um quadrado de lado ${lado.value}m é ${dobro.toFixed(2)} m² `)
}