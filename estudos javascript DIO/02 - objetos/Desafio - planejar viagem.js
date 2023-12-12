// DESAFIO
//Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado. Crie um método que dado a quantiade de quilómetros e o preço do combustível nos de o valor gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    consumoPorKM;

    constructor(marca, cor, consumoPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKM = consumoPorKM;
    }

    calcular(distancia, consumoPorKM, cotacaoCombustivel) {
        return (distancia / this.consumoPorKM) * cotacaoCombustivel;
    }
}
const distancia = 15; //Insira aqui a distancia em KM do seu percurso
const cotacaoCombustivel = 5.61;

const fusca = new Carro('fusca', 'azul', 8.5);

console.log(`Seu ${fusca.marca} ${fusca.cor} consome R$ ${fusca.calcular(distancia, fusca.consumoPorKM, cotacaoCombustivel)} para realizar essa viagem`);
