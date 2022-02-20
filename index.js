//var celsius = Number.parseFloat(window.prompt('Escreva a temperatura em Celsius'))
//var kelvin = celsius + 273
//window.alert('A temperatura corresponde a ' + kelvin + ' graus Kelvin')

var celsius = document.querySelector('input.text')
var btn = document.querySelector('input#btn')


btn.addEventListener("click", ckelvin)
btn.addEventListener("click", cfarenheit)

function ckelvin (){
    let c = Number.parseFloat(celsius.value)
    let kelvin = c+273
    let resposta = document.querySelector('h2.k-resposta')
    resposta.innerHTML = ('A temperatura corresponde a '+ kelvin + ' graus Kelvin')
}

function cfarenheit() {
    let c = Number.parseFloat(celsius.value)
    let f = [9*c + (5*32)]/5
    let resposta = document.querySelector('h2.f-resposta')
    resposta.innerHTML = ('A temperatura corresponde a '+ f + ' graus Farenheit')
}