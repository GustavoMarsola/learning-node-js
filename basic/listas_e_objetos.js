// Arrays
const frutas = ["maçã", "banana", "laranja"]; // Array (lista) de frutas

// Operações comuns com arrays
frutas.push("uva"); // Adiciona "uva" ao final do array
frutas.pop(); // Remove o último elemento do array
let primeiraFruta = frutas[0]; // Acessa o primeiro elemento do array
frutas.map((fruta) => fruta.toUpperCase()); // Transforma todas as frutas para maiúsculas
frutas.forEach((fruta) => console.log(fruta)); // Imprime cada fruta no console
frutas.filter((fruta) => fruta.startsWith("b")); // Filtra frutas que começam com 'b'
frutas.find((fruta) => fruta === "laranja"); // Encontra a fruta "laranja"
frutas.includes("banana"); // Verifica se "banana" está no array
console.log("Quantidade de frutas:", frutas.length) // Imprime a quantidade de frutas no array

// Objetos
const pessoa = {
    nome: "Ana",
    idade: 30,
    profissao: "Engenheira"
};

// Acessando propriedades do objeto
let nomePessoa = pessoa.nome; // Acessa a propriedade 'nome'
let idadePessoa = pessoa["idade"]; // Acessa a propriedade 'idade'

// Modificando propriedades do objeto
pessoa.idade = 31; // Atualiza a idade para 31
pessoa.cidade = "São Paulo"; // Adiciona uma nova propriedade 'cidade'

// Iterando sobre as propriedades do objeto
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

// Convertendo objeto para JSON
const pessoaJSON = JSON.stringify(pessoa);
console.log("Objeto em JSON:", pessoaJSON);

// Convertendo JSON de volta para objeto
const pessoaObj = JSON.parse(pessoaJSON);
console.log("Objeto a partir do JSON:", pessoaObj);
console.log("Nome da pessoa do objeto JSON:", pessoaObj.nome);

// Exemplos de uso de arrays e objetos juntos
const listaDePessoas = [
    { nome: "Carlos", idade: 25 },
    { nome: "Mariana", idade: 28 },
    { nome: "Pedro", idade: 22 }
];

listaDePessoas.forEach((pessoa) => {
    console.log(pessoa.nome + " tem " + pessoa.idade + " anos.");
});