var agora = new Date()
var diaSem = agora.getDate()

console.log(diaSem)

/*switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break 
    default:
        console.log('[ERRO] Dia Inválido')
        break
}*/
switch(diaSem) {
    case 0:
        console.log ('Domingo')
        break
    case 1:
        console.log ('Segunda-feira')
        break
    case 2:
        console.log ('Terça-feira')
        break
    case 3:
        console.log ('Quarta-feira')
        break
    case 4:
        console.log ('Quinta-feira')
        break
    case 5:
        console.log ('Sexta-feira')
        break
    case 6:
        console.log ('Sábado')
    default:
        console.log ('[ERRO] - DIA INVÁLIDO')
}
