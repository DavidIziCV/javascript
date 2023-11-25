let botao = document.getElementById('botao')
let pesoInput = document.getElementById('numeroInput')




botao.addEventListener('click', () => onButtonTap())

function onButtonTap(){
    let peso = parseFloat(pesoInput.value)
    if (peso <= 50){
        window.alert(`Não há multa`)
        return
    }

    let multa = (peso - 50) * 4 
    window.alert(`o: ${multa} `)

}