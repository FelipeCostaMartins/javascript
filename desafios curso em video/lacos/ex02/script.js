function GerarTabuada() {
    let numero = document.getElementById('numero')
    let select = document.getElementById('tabuadaID')

    if (numero.value.length == 0) {
        window.alert('Ops, houve um erro ;( por f avor digite um número')

    } else {
        let n = Number(numero.value)
        select.innerHTML = ''
        for (let c = 1; c <= 10; c++) {// 'c' significa contador
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            select.appendChild(item)
            
        }

    }
}

