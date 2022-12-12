function media() {
    var nome = window.prompt('Qual o nome do aluno?')
    var nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
    var media = (nota1 + nota2) / 2
    var res = document.getElementById('res')
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}<mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
    if (media > 5) {
        res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>Meus parabéns!</strong></p>`
    } else {
        res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>Estude um pouco mais pouco!</strong></p>`
    }
}