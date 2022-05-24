function inserir(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}
function limpar(){
    var res = document.getElementById('resultado')
    res.innerHTML = ""
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else
    {
        document.getElementById('resultado').innerHTML = ""
    }
}