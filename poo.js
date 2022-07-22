class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(msg){
        alert(this.nome + ' disse ' + msg)
    }
}

var p1 = new Pessoa('Davi')

p1.falar('Ola tudo bem')
