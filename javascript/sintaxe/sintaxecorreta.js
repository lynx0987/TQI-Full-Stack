function comparacao(n1, n2) {
    if (!n1 || !n2) return 'defina dois numeros.'
    const primeiraFrase = criaPfrase(n1, n2);
    const segundaFrase = criaSfrase(n1, n2);
    return primeiraFrase + '\n' + segundaFrase;
}

function criaPfrase(n1, n2) {
    let saoIguais = '';
    n1 !== n2 ? saoIguais = "nao sao" : saoIguais = "sao";

    return 'os numeros ' + n1 + ' e ' + n2 + ' ' + saoIguais + ' iguais.';
}

function criaSfrase(n1, n2) {
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const soma = n1 + n2;
    const compara10 = soma > 10;
    const compara20 = soma < 20;

    compara10 ? resultado10 = 'maior' : resultado10 = resultado10;

    if (compara20 == false) {
        resultado20 = 'maior';
    }
    return 'Sua soma e ' + soma + ', que e ' + resultado10 + ' que 10 e ' +
        resultado20 + ' que 20.'
}

console.log(comparacao())