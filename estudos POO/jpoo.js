function Person(primeironome, ultimonome, idade, genero, interesses){
    this.nome = {
        'primeiro': primeironome,
        'ultimo': ultimonome
    }
    this.idade = idade
    this.genero = genero
    this.interesses = interesses
    this.bio = function() {
        console.log(`${this.nome[0]} ${this.nome[1]} eu tenho ${this.idade} anos e meus interesses são ${this.interesses[0]} e ${this.interesses[1]}`)
    }
}

var andrei = new Person(['Andrei', 'Cruz'], 16,'masculino', ['RPG', 'Jardinagem'])

andrei.bio()

function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  }