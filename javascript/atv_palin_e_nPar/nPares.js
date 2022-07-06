function substPares(array) {
    if (!array) return "nao é um array";
    if (!array.length) return "array vazio";

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("ja e 0.");
        } else if (array[i] % 2 === 0) {
            array[i] = 0;
        }
    }
    return array;
}

let arr = [0, 1, 2, 3, 4, 5];

console.log(substPares(arr))