var n1, n2, soma, somaB, comparacao;

function entrada() {
    n1 = prompt("digite o n1");
    n2 = prompt("digite o n2");
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1, n2;
}

entrada();
var resultado = n1 + n2;

if (n1 === n2) {
    comparacao = "sao";
}

else {
    comparacao = "nao sao";
}

if (resultado < 10) {
    soma = "menor que 10";
}

else {
    soma = "maior que 10";
}

if (resultado < 20) {
    somaB = "menor que 20.";
}
else {
    somaB = "maior que 20.";
}
console.log("os numeros n1 e n2 " + comparacao +
    "  iguais.");
console.log("Sua soma e " + resultado + ", que e " + soma + " e " + somaB);
