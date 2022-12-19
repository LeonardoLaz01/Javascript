function tabuada() {
    var numero = document.getElementById('numero').value
    var res = document.getElementById('res')
    if (numero != '') {
        res.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            res.innerHTML += `<p>${Number(numero)} x ${Number(c)} = ${Number(numero * c)}</p>`
        }
    } else {
        window.alert('erro')
    }
}