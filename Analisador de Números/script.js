const lista = []
var tab = document.getElementById('tab')    
var soma = 0
var res = document.getElementById('res')
function adicionar() { //validando os números digitados e colocando em uma array.
    res.innerHTML = ''
    var num = document.getElementById('num').value
    if (lista.includes(num) || num > 100 || num < 1 || num == '') { 
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        lista.push(num)
        tab.innerHTML += `<option value="tab${num}">Valor ${num} adicionado.</option>`
    }
} function finalizar() { //fazendo as contas com os números digitados e mostrando na tela.
    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        soma = 0
        for (let x in lista) {soma += Number(lista[x])}
        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max(...lista)}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min(...lista)}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma / lista.length}</p>`
    }
}