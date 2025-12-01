class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("João", 25);
pessoa1.apresentar(); // Olá, meu nome é João e tenho 25 anos.

const pessoa2 = new Pessoa("Maria", 30);
pessoa2.apresentar(); // Olá, meu nome é Maria e tenho 30 anos.