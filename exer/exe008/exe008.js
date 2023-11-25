let c = document.getElementById('cInput')
let f = document.getElementById('fInput')
let k = document.getElementById('kInput')
c.addEventListener('change', () => onInputEdit(c))
f.addEventListener('change', () => onInputEdit(f))
k.addEventListener('change', () => onInputEdit(k))


function onInputEdit(input){
    if(input === c){
        let celsius = parseFloat(c.value)
        let fari = 1.8 * celsius + 32
        let kelvin = celsius + 273.15
        f.value = fari
        k.value = kelvin
        return
    }
    if(input === f){
        let fari = parseFloat(f.value)
        let celsius = (fari - 32) * 5/9
        let kelvin = ((fari - 32)/1.8) + 273.15 
        c.value = celsius
        k.value = kelvin
        return
    } 
    let kelvin = parseFloat(k.value)
    let celsius = kelvin - 273.15
    let fari = 1.8 * (kelvin - 273.15) + 32
    c.value = celsius.toFixed(2)
    f.value = fari.toFixed(2)
    
}