/*function calcIdade() {
    var nas = Number(document.getElementById('iidade').value)
    var anoatual = new Date().getFullYear()
    var idade = anoatual - nas
    var ou = document.getElementById('ival')
    ou.value = `Sua idade é: ${idade}`
}*/

function clicou() {
    var nas = Number(window.document.getElementById('iidade').value)
    var anoatual = new Date().getFullYear()
    var res = window.document.getElementById('res')
    if (nas == 0 || nas > anoatual) {
        window.alert('[ERRO] Verifique e tente novamente')
    }   else {
        var idade = anoatual - nas
        var sexo = window.document.getElementsByName('radsexo')
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            document.body.style.background = 'aqua'
            if (idade < 18) {
                img.setAttribute('src', 'foto-homem-jovem.jpg')
            } else if (idade < 40) {
                img.setAttribute('src', 'foto-homem-adulto.jpg')
            }  else {
                img.setAttribute('src', 'foto-velho.jpg')
            }
        }   else if (sexo[1].checked) {
            genero = 'Mulher'
            document.body.style.background = 'violet'
            if (idade < 30) {
                img.setAttribute('src', 'foto-mulher-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'foto-velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com  ${idade} anos.</p>`
        res.appendChild(img)
    }
}