
//ボタンで数値代入
function setvalue(elm,num){
	//document.nForm.elements[elm].value = parseInt(num);
	if(num =="-1"){
		document.nForm.elements[elm].value ="";
	}else{
		document.nForm.elements[elm].value = parseInt(num);
	}
}


//種族値を代入する
function setpokemon(num){
	mega_button(num);
	if(num1==1){
		for(i=0; i<pokemon.length; i++){
			if(pokemon[i][0]==document.nForm.elements['pokename'].value){
				//document.nForm.elements[sn[1]].value = pokemon[i][2];
				break;
			}
		}
	}else if(num1==2){
		for(i=0; i<pokemon.length; i++){
			if(pokemon[i][0]==document.nForm.elements['pokename'].value){
				//document.nForm.elements[sn[1]].value = pokemon[i][1];
				//document.nForm.elements[sn[3]].value = pokemon[i][3];
				//document.nForm.elements[sn[5]].value = pokemon[i][6];
				break;
			}
		}
	}
}