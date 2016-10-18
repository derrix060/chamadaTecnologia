function addComboMateria(){
	var dia = document.getElementById("comboDia").value;
	var periodo = document.getElementById("periodoTarde").checked?"tarde":"noite";
	var comboMateria = document.getElementById("comboMateria");
	
	var request = new XMLHttpRequest();
	request.open("GET", "data/materias.json", false);
	request.send(null)
	var materiasJSON = JSON.parse(request.responseText);
		
	//removing olds
	comboMateria.length = 0
		   
	//find palestras with right dia and right periodo
	for (i = 0; i < materiasJSON.materias.length; i++){
		if(materiasJSON.materias[i].dia == dia && materiasJSON.materias[i].periodo == periodo){
			var option = document.createElement("option");
			
			option.text = materiasJSON.materias[i].nome;
			option.value = materiasJSON.materias[i].id;
			
			comboMateria.add(option, null);
		}
	 }
}


function validarCamposAluno(){
	var matricula = document.getElementById("matricula");
	var nome = document.getElementById("nome");
	var materia = document.getElementById("comboMateria");
	
	
	if (!isNumber(matricula.value)){
		matricula.focus();
		alert("Insira uma matrícula válida!!");
		return false;
	}
	
	if (isNumber(nome.value) || nome.value.length == 0){
		nome.focus();
		alert("Insira um nome válido!!");
		return false;
	}
	
	if(!document.getElementById("periodoTarde").checked && !document.getElementById("periodoNoite").checked){
		alert("Selecione um período!!");
		return false
	}
	
	if (materia.value == null){
		materia.focus();
		alert("Selecione uma materia!");
		return false;
	}	
	
	return true;
}
function isNumber(n){
	return !isNaN(parseFloat(n) && isFinite(n));
}