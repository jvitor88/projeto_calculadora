function inserir(num){
    var numero = document.getElementById('resultado').innerHTML
    if(numero.length < 11){
    document.getElementById('resultado').innerHTML = numero + num
    }
    else{
    document.getElementById('resultado').innerHTML = num
    }
}
function limpar(){
    var res = document.getElementById('resultado')
    res.innerHTML = ""
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado).toFixed(2)
    }
    else{
        document.getElementById('resultado').innerHTML = ""
    }
}
function apagar(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}