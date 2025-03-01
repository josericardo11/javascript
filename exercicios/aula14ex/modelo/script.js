function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hatual = new Date()
    var hora = hatual.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        img.src = 'fotomanha.jpg'
    }   else if (hora > 12 && hora < 18) {
        img.src = 'fototarde.jpg'
    }   else {
        img.src = 'fotonoite.jpg'
    }
}