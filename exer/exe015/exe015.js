const botao = document.getElementById('botao')
const valorHoraInput = document.getElementById('numeroInput')
const horasMesInput = document.getElementById('numeroInput2')
const descontos = {
    ir: 11, inss: 8, sindicato: 5
}


botao.addEventListener('click', () => onButtonTap())

function onButtonTap(){
    const salarioBruto = parseFloat(valorHoraInput.value) * parseFloat(horasMesInput.value)
    const descontIr = salarioBruto * (descontos.ir / 100)
    const descontInss = salarioBruto * (descontos.inss / 100)
    const descontSindicato = salarioBruto * (descontos.sindicato / 100)
    const salarioLiquido = salarioBruto - descontIr - descontInss - descontSindicato
    window.alert(`Salário Bruto :${salarioBruto.toFixed(2)} , IR: ${descontIr.toFixed(2)} , INSS: ${descontInss.toFixed(2)} , Sindicato ${descontSindicato.toFixed(2)} , Salario liquido: ${salarioLiquido.toFixed(2)} `)
}