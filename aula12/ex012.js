/*var agora = new Date()
var hora = agora.getHours()     seleciona a hora atual do sistema*/ 
var hora = 3
console.log(`Agora são exatamente ${hora} horas`)
if (hora >=0 && hora < 4){
    console.log("Boa madrugada")
} else if (hora >= 4 && hora < 12){
    console.log("Bom dia!")
} else if (hora >= 12 && hora < 17) {
    console.log("Boa tarde!")
} else if (hora >= 17){
    console.log("Boa noite!")
}