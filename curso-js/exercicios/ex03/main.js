function cal() {
    var inicio = document.querySelector('#ini')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#pass')
    var resultado = document.querySelector('#res') 
    for (c = 3;c <= 12; c ++){
        resultado.HTML.innerHTML += `<span>${c}</span>`
        alert(c)
    }
    for (c = inicio.value;c <= fim.value;c += passo.value){
        resultado.HTML.innerHTML += `<span>${c}</span>`
        alert(c)
    }
    resultado.innerHTML = 'alo'
    resultado.sty
}