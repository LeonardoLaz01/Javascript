const lista = []                            //os valores não podem repetir, passar de 100 e ser null 
var tab = document.getElementById('tab')    //falta fazer a validação acima
var soma = 0
var res = document.getElementById('res')
function adicionar() {
    res.innerHTML = ''
    var num = document.getElementById('num').value
    lista.push(num)
    tab.innerHTML += `<option value="tab${num}">Valor ${num} adicionado.</option>`
} function finalizar() {
    soma = 0
    for (let x in lista) {soma += Number(lista[x])}
    res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${Math.max(...lista)}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${Math.min(...lista)}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma / lista.length}</p>`

}