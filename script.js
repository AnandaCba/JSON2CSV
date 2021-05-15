
var arrKeys=[]
var arrValues=[]
var completeKey

function getInput(){

	const stringJSON = document.getElementById('input').value;
	//chamando a função
	stringToObj(stringJSON);
};

//String para objeto
function stringToObj(stringJSON){

	//Transformando em objeto
 	const objJSON = JSON.parse(stringJSON);
	keyAndValue(objJSON);
};

//Separa cabeçalho dos valores
function keyAndValue(objJSON){

	let count = 0;
	let keys;
	let values;

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
	insertCSV(completeKey);
};

//Mostrar user em formato
function insertCSV(completeKey){

	let header;
	let rows;
	let newItem;

	//Inserindo o valor de cabeçalho no HTML 
	header = document.getElementById('header');
	//onde será inserido os valores
	rows = document.getElementById('rows');
	header.innerHTML = completeKey;
	
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
