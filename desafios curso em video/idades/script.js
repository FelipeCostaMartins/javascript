function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Ops, algo deu errado! ;( Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'https://i.pinimg.com/564x/e6/7d/a9/e67da99a7a5fdcd335bc3b506872d071.jpg')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'https://i.pinimg.com/originals/42/d7/5b/42d75b48e4c8cb18c013280621589055.jpg')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'https://st2.depositphotos.com/2931875/10184/i/600/depositphotos_101841964-stock-photo-man-in-mid-30s-poses.jpg')
            } else {
                // IDOSO
                img.setAttribute('src', 'https://thumbs.dreamstime.com/b/homem-consider%C3%A1vel-idoso-51318761.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'https://i.pinimg.com/236x/5f/95/69/5f95695f20e25caf0cfaeb509e80f5f8--kids-hair-styles-kids-modeling.jpg')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxQc34Sw4GLUJsz22thItmnxU3K6vAmG3Vw&usqp=CAU')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'https://thumbs.dreamstime.com/b/mulher-adulta-feliz-que-sorri-em-voc%C3%AA-43811922.jpg')
            } else {
                // IDOSO
                img.setAttribute('src', 'https://www.onconews.com.br/site/images/artigos/Idosa.jpg')
            }
            
        }
    }
    res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
    res.appendChild(img)
}