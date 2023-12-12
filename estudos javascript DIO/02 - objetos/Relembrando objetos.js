//Objetos e classes

const pessoa = {
    nome: 'felipe',
    idade: 18,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

pessoa.descrever()

pessoa.altura = 1.69;

delete pessoa.idade;

console.log(pessoa);


