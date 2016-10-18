function addComboPalestra(){
	var dia = document.getElementById("comboDia").value;
	var periodo = document.getElementById("periodoTarde").checked?"tarde":"noite";
	var comboPalestra = document.getElementById("comboPalestra");
	
	
	var request = new XMLHttpRequest();
		request.open("GET", "data/palestras.json", false);
		request.send(null)
	var palestrasJSON = JSON.parse(request.responseText);
		
	//removing olds
	comboPalestra.length = 0
		   
	//find palestras with right dia and right periodo
	for (i = 0; i < palestrasJSON.palestras.length; i++){
		if(palestrasJSON.palestras[i].dia == dia && palestrasJSON.palestras[i].periodo == periodo){
			var option = document.createElement("option");
			
			option.text = palestrasJSON.palestras[i].nome;
			option.value = palestrasJSON.palestras[i].id;
			
			comboPalestra.add(option, null);
		}
	 }
}

function addAlunoPalestra(){
	if (validarCamposAluno() && validarCamposPalestra()){
		
	}
}

function validarCamposPalestra(){
	var dia = document.getElementById("comboDia");
	var palestra = document.getElementById("comboPalestra");
	
	if (dia.value == 0){
		dia.focus();
		alert("Selecione um dia!");
		return false;
	}
	if (palestra.value == null){
		palestra.focus();
		alert("Selecione uma palestra!");
		return false;
	}
	return true
	
}