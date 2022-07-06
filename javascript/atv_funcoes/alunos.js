let alunos = [
	{
	nome: 'victor',
	nota: 6,
},
	{
		nome: 'carol',
		nota: 7,
	},
	{
		nome: 'marley',
		nota: 8,
	},
	{
		nome: 'gamora',
		nota: 8,
	}]

function alunosAprovados(array, media) {
	let aprovados = []

	for (let i = 0; i < array.length; i++) {
		//aqui foi usado object destructuring
		const { nome, nota } = array[i];
		if (nota >= media) {
			aprovados.push(nome)
		}
		// ou fazer assim
		//if (array[i].nota >= media) {
			//aprovados.push(array[i].nome);
		//}
	}
	return console.log(aprovados);
}

alunosAprovados(alunos, 7)