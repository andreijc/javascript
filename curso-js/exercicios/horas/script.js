var agora = new Date()
var hora = agora.getHours()
var img = document.getElementById('img')
var msg = document.querySelector('#msg')

hora = 6



if (hora < 12) {
        img.style.background = 'url(imagens/pexels-pixabay-207247.jpg)'
        msg.innerHTML = '<p>Agora é de manhã</p>' 
}