function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var agora = new Date
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora >= 0 && hora < 12) {
        img.src = "Imagens/manha.jpg"
        document.body.style.background = "#ADD8E6"
    } else if (hora > 12 && hora < 18) {
        img.src = "Imagens/tarde.jpg"
        window.document.body.style.background = "#F4A460"
    } else {
        img.src = "Imagens/noite.jpg"
        document.body.style.background = "#483D8B"
    }

}