function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc')
    var res = document.getElementById('res')
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novament!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - nasc.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'Fotos/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'Fotos/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'Fotos/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'Fotos/foto-idoso-m.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'Fotos/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'Fotos/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'Fotos/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'Fotos/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }   
}