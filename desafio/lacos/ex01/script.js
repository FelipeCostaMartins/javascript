function contar() {
    var BoxInicio = document.getElementById('inicio')
    var BoxFim = document.getElementById('fim')
    var BoxPasso = document.getElementById('passo')
    var res = document.getElementById('res')

    if (BoxInicio.value.length == 0 || BoxFim.value.length == 0 || BoxPasso.value.length == 0) {
        res.innerHTML = 'Impossível de contar!'
        // window.alert('Ops! Faltam dados ;(')
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(BoxInicio.value)
        let f = Number(BoxFim.value)
        let p = Number(BoxPasso.value)

        if (p <= 0) { 
            window.alert('passo inválido! Considerando PASSO 1') 
            p = 1
        }

        if (i < f) {
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; contar += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // CONTAGEM REGRESSIVA
            for (let c = i; c >= f; contar -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
// AAAAAAAAAAAAA NAO FUNCIONAAAAA
// AAAAAAAAAAAAAAAA
CONCATENA;'AO 
CONCATENAÇÃO
CONCATENAÇÃO
CONCATENAÇÃO
CONCATENAÇÃO
CONCATENAÇÃO
CONCATENAÇÃO
CONCATENAÇÃO
CONCATENAÇÃO
CONCATENAÇÃO
CONCATENAÇÃO
CONCATENAÇÃO
CONCATENAÇÃO