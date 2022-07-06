// uso do try, catch para validação de erros
function validaArray(array, num) {
    try {
        if (!array && !num) throw new ReferenceError("Envie os parametros")

        if (typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object")

        if (typeof num !== 'number') throw new TypeError("Precisa ser um numero")

        if (arr.length !== num) throw new RangeError("Tamanho invalido")
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Reference Error")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Range Error")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Type Error")
            console.log(e.message)
        } else {
            console.log(" Erro nao esperado")
        }
    }
}

var arr = [2, 3];
validaArray()