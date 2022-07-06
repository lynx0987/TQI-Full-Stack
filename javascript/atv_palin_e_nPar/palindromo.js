/*function verificaPalindromo(string) {
    if (!string) return "string inexistente";
    return string.split("").reverse().join("") === string;
}
console.log(verificaPalindromo("omo"))  */

function verificaPalindromo(string) {
    if (!string) return "string inválida";

    for (let i = 0; i < String.length / 2; i++) {

        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo("ola"))
