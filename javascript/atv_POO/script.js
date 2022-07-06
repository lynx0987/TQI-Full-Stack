class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia; this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	get saldo() {
		return this._saldo;
	}
	set saldo(valor) {
		this.saldo = valor;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return "operaçao negada";
		}
		this._saldo = this.saldo - valor;
		return this._saldo
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoDeCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoDeCredito = cartaoDeCredito;
	}

	get cartaoDeCredito() {
		return this._cartaoDeCredito;
	}

	set cartaoDeCredito(valor) {
		this._cartaoDeCredito = valor;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupanca';
	}
}

class ContaUniversitaria extends ContaBancaria{
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'corrente';
	}
	sacar(valor) {
		if (valor > 500) {
			return 'Operacao negada'
		} else if (valor > this._saldo) {
			return 'Operacao Negada'
		}
		this._saldo = this._saldo - valor;
		return this._saldo
	}
}

