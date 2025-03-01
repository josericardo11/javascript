function contar() {
    var ini = document.getElementById('iini')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('res')
    
    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
         if (i < f) {
            for (let c = i; c <= f ; c += p) {
            res.innerHTML += `\u{1f449} ${c}`
            }
        }   else {
            for (let c = i; c >= f; c -= p)
                res.innerHTML += `\u{1f449} ${c} `
        }
    }
    
}