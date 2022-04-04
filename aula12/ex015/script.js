function verificar(){
    //verificador idade
    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = document.getElementById('anoNasc')
    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        window.alert ('[ERRO] TENTE NOVAMENTE!')
    } else{
        var idadeFormatado = parseInt(idade.value)
        var idadeTotal = anoAtual - Number(idade.value)  
        
        //verificador sexo
        var msg = window.document.getElementById('msg')
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var sexo = window.document.getElementsByName('sexo')
        for (var i = 0; i < sexo.length; i++) {
            if (sexo[i].checked && sexo[i].value == 'masculino'){
                msg.innerHTML = `Foi identificado um HOMEM de ${idadeTotal} anos`
                if (idadeTotal <=2){
                    img.setAttribute('src', 'fotos/masculino/bebe-masc.png')
                } else if (idadeTotal <=12){
                    img.setAttribute('src', 'fotos/masculino/menino.png')
                } else if (idadeTotal <=18){
                    img.setAttribute('src', 'fotos/masculino/jovem-homem.png')
                } else if (idadeTotal <=50){
                    img.setAttribute('src', 'fotos/masculino/adulto.png')
                } else {
                    img.setAttribute('src', 'fotos/masculino/idoso.png')
                }
            } 
            if (sexo[i].checked && sexo[i].value == 'feminino'){
                msg.innerHTML = `Foi identificado uma MULHER de ${idadeTotal} anos`
                if (idadeTotal <=2){
                    img.setAttribute('src', 'fotos/feminino/bebe-fem.png')
                } else if (idadeTotal <=12){
                    img.setAttribute('src', 'fotos/feminino/menina.png')
                } else if (idadeTotal <=18){
                    img.setAttribute('src', 'fotos/feminino/jovem-mulher.png')
                } else if (idadeTotal <=50){
                    img.setAttribute('src', 'fotos/feminino/adulta.png')
                } else {
                    img.setAttribute('src', 'fotos/feminino/idosa.png')
                }
            }
            msg.style.textAlign = 'center'
            msg.appendChild(img)
        }
    }
}