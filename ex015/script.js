function verificar(){
    //verificador idade
    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = document.getElementById('anoNasc')
    var idadeFormatado = parseInt(idade.value)
    var idadeTotal = (anoAtual - idadeFormatado)  
    
    //verificador sexo
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var sexo = window.document.getElementsByName('sexo')
    for (var i = 0; i < sexo.length; i++) {
        if (sexo[i].checked && sexo[i].value == 'masculino'){
            msg.innerHTML = `Foi identificado um HOMEM de ${idadeTotal} anos`
            if (idadeTotal <=2){
                foto.src = 'fotos/masculino/bebe-masc.png'
            } else if (idadeTotal <=12){
                foto.src = 'fotos/masculino/menino.png'
            } else if (idadeTotal <=18){
                foto.src = 'fotos/masculino/jovem-homem.png'
            } else if (idadeTotal <=50){
                foto.src = 'fotos/masculino/adulto.png'
            } else {
                foto.src = 'fotos/masculino/idoso.png'
            }
        } 
        if (sexo[i].checked && sexo[i].value == 'feminino'){
            msg.innerHTML = `Foi identificado uma MULHER de ${idadeTotal} anos`
            if (idadeTotal <=2){
                foto.src = 'fotos/feminino/bebe-fem.png'
            } else if (idadeTotal <=12){
                foto.src = 'fotos/feminino/menina.png'
            } else if (idadeTotal <=18){
                foto.src = 'fotos/feminino/jovem-mulher.png'
            } else if (idadeTotal <=50){
                foto.src = 'fotos/feminino/adulta.png'
            } else {
                foto.src = 'fotos/feminino/idosa.png'
            }
        }     
    }
}