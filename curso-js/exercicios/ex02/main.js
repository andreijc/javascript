
function enviar_1() {
    var escolha_r = document.getElementsByName('r')
    var escondido_a = document.querySelector('.escondido_a')
    var escondido_p = document.querySelector('.escondido_p')
    var animais = document.getElementsByName('animais')
    var plantas = document.getElementsByName('plantas')
    var img = document.getElementById('img')

    if (escolha_r[0].checked ) /*caso escolha animal*/{
        escondido_p.style.display = 'none'
        escondido_a.style.display = 'block'
        if (animais[0].checked) /*Morcego*/{
            img.style.backgroundImage = 'url(estilos/imagens/animais/morcego-2.jpg)'
        } else if (animais[1].checked)/*Onitorrinco*/{
            img.style.backgroundImage = 'url(estilos/imagens/animais/ornitorrinco.jpg)'
        } else if (animais[2].checked) /*Coruja*/{
            img.style.backgroundImage = 'url(estilos/imagens/animais/coruja.jpg)'
        }else if (animais[3].checked)/*Lobo*/{
            img.style.backgroundImage = 'url(estilos/imagens/animais/lobo.jpg)'
        }

    } else if (escolha_r[1].checked) /*caso escolha planta*/ {
        escondido_p.style.display = 'block'
        escondido_a.style.display = 'none'
        if (plantas[0].checked)/*carvalho*/{
            img.style.backgroundImage = 'url(estilos/imagens/plantas/carvalho.jpg)'
        }else if (plantas[1].checked) /*Jacaranda*/{
            img.style.backgroundImage = 'url(estilos/imagens/plantas/jacaranda.jpg)'
        } else if (plantas[2].checked) /*Margarida*/{
            img.style.backgroundImage = 'url(estilos/imagens/plantas/margaridas.jpg)'
        }else if (plantas[3].checked) /*Sakura*/ {
            img.style.backgroundImage = 'url(estilos/imagens/plantas/sakura.jpg)'
        }
    }
    img.style.display = 'block'
    res.appendChild('img')
}
