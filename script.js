
var objJSON
var completeKey
var arrValues = []

function getInput(){

	let stringJSON

		//Pegando o valor do input do user em string
		stringJSON = document.getElementById('input').value;

		//Transformando em objeto
		objJSON = JSON.parse(stringJSON);

	//Chama função	
	transform();
}

//Separar cabeçalho dos valores
function transform(){

	let count = 0;
	let keys;
	let values;
	var arrKeys=[]

		//loop conta tamanho array e as infos de cada obj
		while (count <= objJSON.length -1){

			//Pega o cabeçalho de cada obj
			keys = Object.keys(objJSON[count]);
			//Pega o valor de cada obj
			values = Object.values(objJSON[count]);

				//Insere os dados
				arrKeys.push(keys);
				arrValues.push(values);
			
				//organizar		
				arrKeys.sort();

				//Log de verificação
				console.log(`[Objeto ${count}] Cabeçalho - [${keys}]`);
				console.log(`[Objeto ${count}] Valores - [${values}]`);

			//Após organizar a ultima posição do array vai ser o cabeçalho de maior valor.
			completeKey = arrKeys[0];
	
			count ++;

		};
	
	// Call function
	insertCSV();

};

function insertCSV(){

	let header;
	let rows;
	let newItem;

	//Inserindo o valor de cabeçalho no HTML 
	header = document.getElementById('header');
	header.innerHTML = completeKey;
	
	//onde será inserido os valores
	rows = document.getElementById('rows');

	//Loop para buscar todos os valores dos arrays
	for (let count = 0; count <= arrValues.length -1; count ++) {
		
		//cria um elemento "option" em html
		newItem = document.createElement('option');
		//insere o valor encontrado no elemento criado
		newItem.text = `${arrValues[count]}`;
		//insere o elemento criado em um elemento "select" existente
		rows.appendChild(newItem);

	};
};
