function verificar(){
    //verificador idade
    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = document.getElementById('anoNasc')
    var idadeFormatado = parseInt(idade.value)
    var idadeTotal = (anoAtual - idadeFormatado)  
    //verificador sexo
    var msg = document.getElementById('msg')
    var sexo = document.getElementsByName('sexo')
    for (var i = 0; i < sexo.length; i++){
        if (sexo[i].value == 'masculino'){
            msg.innerHTML = `Foi identificado um HOMEM de ${idadeTotal} anos`
        } else {
            msg.innerHTML = `Foi identificado uma MULHER de ${idadeTotal} anos`
        }
    }
    
}