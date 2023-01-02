var res = document.getElementById('res')
function contar() {
    res.innerHTML = '<h2>Contando de 1 até 10</h2>'
    for (let c = 1; c <= 10; c++) {
        res.innerHTML += `${c}  &#128073; `
    }
    res.innerHTML += '&#127937;'
}
function contagem() {
    res.innerHTML += '<h2>Contando de 1 até 10, marcando os pares</h2>'
    for(let c = 1; c <= 10; c++) {
        if (c % 2 == 0) {
            res.innerHTML += `<mark><strong>${c}</strong></mark> &#128073; `
        } else {
            res.innerHTML += `${c} &#128073; `
        }
    }
    res.innerHTML += '&#127937;'
}
function contagempar() {
    res.innerHTML += '<h2>Números pares de 1 até 10</h2>'
    for (let c = 2; c <= 10; c += 2) {
        res.innerHTML += `${c} &#128073; `
    }
    res.innerHTML += '&#127937;'
}
function regressiva() {
    res.innerHTML += '<h2>Contagem Regressiva de 10 a 1</h2>'
    for (let c = 10; c >= 1; c--) {
        res.innerHTML += `${c} &#128073; `
    }
    res.innerHTML += '&#127937;'
}
function positivo() {
    let num = document.getElementById('num').value
    res.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    for (let c = 0; c <= Number(num); c++) {
        res.innerHTML += `${c} &#128073; `
    }
    res.innerHTML += '&#127937;'
}