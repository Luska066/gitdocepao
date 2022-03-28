function listarItens(){

	nomeItem = prompt('Numero do pedido :');

	nomeItem = parseInt(nomeItem);

	
	if(Number.isInteger(nomeItem)){

		switch(nomeItem){
			case 1:
				alert("Você pediu Cafe");
				break;
			case 2:
				alert("Você pediu Leite");
				break;
			case 3:
				alert("Você pediu Pão");
				break;
			case 4:
				alert("Você pediu Ovos");
				break;
			default:
				alert("Item não encontrado!");
				break;
		}


	}else{

		alert("Apenas numeros inteiros!");
	}


}