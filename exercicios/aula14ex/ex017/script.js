function tabuada() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    let n = Number(num.value)
    res.innerHTML = ''
    for (var c = 1; c <= 10; c +=1) {
        res.innerHTML += `${n} x ${c} = ${n*c}<br>`
    }
}