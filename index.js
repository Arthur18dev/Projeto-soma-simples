var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);

function calculo(a, b) {
    return a + b;
}


let valor = calculo(a, b);

console.log("SOMA = " + valor);