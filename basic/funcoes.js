// Nomenclatura tradicional de função
function somar(a, b) {
    return a + b;
}

// Função anônima atribuída a uma variável
const subtrair = function(a, b) {
    return a - b;
};

// Função arrow (função de seta)
const multiplicar = (a, b) => {
    return a * b;
};

// Função arrow com retorno implícito
const dividir = (a, b) => a / b;

// Função com valor padrão para parâmetros
function potencia(base, expoente = 2) {
    return Math.pow(base, expoente);
}

// Função que aceita um número variável de argumentos
function somarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

// Exemplo de uso das funções
console.log("Soma:", somar(5, 3));

// Função Assíncrona
async function buscarDados(url) {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json(); 
        return dados;
    }
    catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

// Chamando a função assíncrona
buscarDados("https://api.exemplo.com/dados")
    .then(dados => console.log("Dados recebidos:", dados))
    .catch(erro => console.error("Erro na chamada:", erro));

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    potencia,
    somarTodos,
    buscarDados
};

