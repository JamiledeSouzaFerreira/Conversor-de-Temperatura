//var celsius = Number.parseFloat(window.prompt('Escreva a temperatura em Celsius'))
//var kelvin = celsius + 273
//window.alert('A temperatura corresponde a ' + kelvin + ' graus Kelvin')
var celsius = document.querySelector('input.text')
var btn = document.querySelector('input#btn')
var resposta = document.querySelector('h2.resposta')

btn.addEventListener("click", converter)

function converter (){
    var c = Number.parseFloat(celsius.value)
    var kelvin = c+273
    resposta.innerHTML = ('A temperatura corresponde a '+ kelvin + ' graus Kelvin')
}
