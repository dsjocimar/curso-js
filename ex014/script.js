function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12){
        //Bom dia
        img.src = 'fotos/manha-pq.png'
    } else if (hora >=12 && hora <= 18) {
        //Boa tarde
        img.src = 'fotos/tarde-pq.png'
    } else {
        //Boa noite
        img.src = 'fotos/noite-pq.png'
    }
}