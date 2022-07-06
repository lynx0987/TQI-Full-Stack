// estudo do uso de this, call e apply.
function calc(anos) {
    return `Daqui a ${anos} anos, ${this.name} 
tera ${this.idade + anos} anos.`
}
const pessoa1 = {
    name: "Victor",
    idade: 26,
}
console.log(calc.apply(pessoa1, [30]))
console.log(calc.call(pessoa1, 20))