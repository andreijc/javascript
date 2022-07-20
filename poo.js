class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
    
    falar(frase){
        alert(this.nome + ' disse: ' + frase)
    }
}

var p1 = new Pessoa('Davi');

p1.falar('Oi tudo bem')