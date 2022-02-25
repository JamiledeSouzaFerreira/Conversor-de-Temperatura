
var btn = document.querySelector('input#btn')
btn.addEventListener("click", converter)

function converter (){
    var txt = document.querySelector('input.txt')
    var rad = document.getElementsByName('radtemp')
    var temp = ''
    var grau = ''
    var res = document.querySelector('h2')
    if (rad[0].checked){
        var temp = txt + 273
        var grau  = 'Kelvin'

    } else if (rad[1].checked){
        var temp = (9*txt + 5*32) /5 
        var grau = 'Farenheit'
    }

    res.innerHTML = (`A temperatura corresponde a ${temp} graus ${grau}`)
}