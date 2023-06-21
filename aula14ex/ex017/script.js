/*
function tabuada(){
    let num = document.getElementById(`txtn`)
    let tab = document.getElementById(`seltab`)
    if (num.value.length == 0){
        window.alert(`Por favor, digite um número!`)
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
*/


function tabuada(){
    if(document.querySelector('input#txtn').value.length == 0){
        alert('Por favor, insira um número')
    }else{
        document.querySelector('select#seltab').innerHTML = ``
        var n = Number(document.querySelector('input#txtn').value)
        for(let c = 1;c <= 10;c++){
            let mult = document.createElement('option')
            mult.text = `${n} * ${c} = ${n*c}`
            mult.value = `tab${c}`
            document.querySelector('select#seltab').appendChild(mult)
        }
    }
}
