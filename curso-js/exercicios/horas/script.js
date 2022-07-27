var agora = new Date()
var hora = agora.getHours()
var img = document.getElementById('img')
var msg = document.querySelector('#msg')
var corpo = document.querySelector('.corpo')

hora = 18



if (hora < 12) {
        img.style.backgroundImage = 'url(estilos/imagens/manha.jpg)'
        msg.innerHTML = '<p>Agora é de manhã</p>' 
        corpo.style.backgroundColor= 'var(--manha)'
} else if (hora >= 12 && hora < 18) {
        img.style.backgroundImage = 'url(estilos/imagens/tarde.jpg)'
        msg.innerHTML = '<p>Agora é de tarde</p>'
        corpo.style.backgroundColor = 'var(--tarde)'
} else if ( 18 <= hora ) {
        img.style.backgroundImage = 'url(estilos/imagens/noite.jpg)'
        msg.innerHTML = '<p>Agora é de noite</p>'
        corpo.style.backgroundColor = 'var(--noite)'
}