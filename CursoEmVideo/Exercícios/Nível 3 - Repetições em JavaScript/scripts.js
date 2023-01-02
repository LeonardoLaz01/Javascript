function contar() {
    let res = document.querySelector('div#res')
    res.innerHTML = '<h2>Contando de 1 até 10</h2>'
    for (let c = 1; c <= 10; c++) {
        res.innerHTML += `${c}  &#128073; `
    }
    res.innerHTML += '&#127937;'
}