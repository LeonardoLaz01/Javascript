function tabuada() {
    let num = document.getElementById('numero').value
    let tab = document.getElementById('tab')
    if (num == '') {
        window.alert('erro')
    } else {
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            tab.innerHTML += `<option value="tab${c}">${num} x ${c} = ${num * c}</option>`
        }
    }
}