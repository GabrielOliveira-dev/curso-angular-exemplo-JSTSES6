var numeros = 'variável com números';

let num = 1;
const PI = 3.14;

let numeros = [1, 2, 3];
numeros.map(function(valor) {
    return valor * 2;
});
numeros.map(valor => valor * 2 );

class Matematica {
    soma(x, y) {
        return x + y;
    }
};
