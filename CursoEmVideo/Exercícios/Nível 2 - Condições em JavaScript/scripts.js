var res = document.getElementById('res')
function media() {
    var nome = window.prompt('Qual o nome do aluno?')
    var nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
    var media = (nota1 + nota2) / 2
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}<mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
    if (media > 5) {
        res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>Meus parabéns!</strong></p>`
    } else {
        res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>Estude um pouco mais pouco!</strong></p>`
    }
} function parouimpar() {
    var num = Number(window.prompt('Digite um número:'))
    if (num % 2 == 0) {
        var msg = 'PAR'
    } else {
        var msg = 'ÍMPAR'
    } res.innerHTML = `<p>O número ${num} que foi digitado é <strong>${msg}</strong>!</p>`
} function maior() {
    var num1 = Number(window.prompt('Digite um número:'))
    var num2 = Number(window.prompt('Digite outro número:'))
    var maior = num1
    if (num1 != num2) {
        if (num2 > maior) {
            maior = num2
        } else {
            maior = num1
        } res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${maior}</strong></p>`
    } else {
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, ambos são <strong>IGUAIS</strong></p>`
    }
} function interacao() {
    var agora = new Date()
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
} function dataehora() {
    var agora = new Date()
    var meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    var dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    res.innerHTML = `<p>Dia: <mark>${agora.getDate()}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${meses[agora.getMonth()]}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${agora.getFullYear()}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${dias[agora.getDay()]}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${agora.getHours()}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${agora.getMinutes()}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${agora.getSeconds()}</mark></p>`
} function idade() {
    var nasc = Number(window.prompt('Em que ano você nasceu?'))
    var agora = new Date()
    var ano = agora.getFullYear()
    var idade = ano - nasc
    res.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}