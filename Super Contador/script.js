function contador() {
    var res = document.getElementById('res');
    res.innerHTML = '<p></p>';
    var inicio = document.getElementById('inicio').value;
    var fim = document.getElementById('fim').value;
    var passo = document.getElementById('passo').value;
    if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
    }
    if (inicio != '') {
        res.innerHTML = '<br>Contando:<br>';
        for (var c = Number(inicio); c <= Number(fim); c += Number(passo)) {
         res.innerHTML += `${c} &#128073`;
        } res.innerHTML += `&#127988`;
    } else {
        res.innerHTML = '<p>Impossível contar!</p>'
    }
}