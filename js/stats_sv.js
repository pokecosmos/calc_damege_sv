// 起動時の処理
window.onload = () => {
  addOption("select_item_a1", ability.ability_a1);
}

//--リスト追加
//--攻撃側 持ち物リスト
//function addList(hoge){
//  for(int k=0;k<=item_a1.length;i++){
//    addOption(hoge,item_a1[i].name);
//  }
//}

/**
 * selectIdに指定したselect要素にoptionArrayの値をoptionとして追加する
 * @param selectId 要素を追加するselectのid
 * @param optionArray 追加する要素の配列
 */
addOption = (selectId, optionArray) => {
  // selectタグを取得する
  const select = document.getElementById(selectId);

  optionArray.forEach(element => {
    // optionタグを作成する
    const option = document.createElement("option");
    // optionタグのテキストを4に設定する
    option.text = element.name;
    // optionタグのvalueを4に設定する
    // FIXME: 仮でvalueにもnameを設定
    option.value = element.name;
    // selectタグの子要素にoptionタグを追加する
    select.appendChild(option);
  });
}


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



//フォルムボタンの表示・非表示切り替え
function mega_button(num) {
  if(num==1){
    var p = document.nForm.elements['pokename_1'].value;
  }else{
    var p = document.nForm.elements['pokename_2'].value;
  }
  if ((p == "コオリッポ") || (p == "コオリッポ(アイス)") || (p == "コオリッポ(ナイス)")) {
    visi(2, num, "アイス", "ナイス");
  } else if ((p == "イルカマン") || (p == "イルカマン(ナイーブ)") || (p == "イルカマン(マイティ)")) {
    visi(2, num, "ナイーブ", "マイティ");
  } else {
    visi(0, num);
  }
}

function visi(num1, num2, var1, var2) {
  if(num2 == 1){
    if (num1 == 0) {
      document.nForm.elements['mega0'].style.visibility = "hidden";
      document.nForm.elements['mega1'].style.visibility = "hidden";
    } else if (num1 == 2) {
      document.nForm.elements['mega0'].value = var1;
      document.nForm.elements['mega1'].value = var2;
      document.nForm.elements['mega0'].style.visibility = "visible";
      document.nForm.elements['mega1'].style.visibility = "visible";
    }
  }else{
      if (num1 == 0) {
      document.nForm.elements['mega0b'].style.visibility = "hidden";
      document.nForm.elements['mega1b'].style.visibility = "hidden";
    } else if (num1 == 1) {
      document.nForm.elements['mega0b'].value = var1;
      document.nForm.elements['mega1b'].value = var2;
      document.nForm.elements['mega0b'].style.visibility = "visible";
      document.nForm.elements['mega1b'].style.visibility = "visible";
    }
  }
}

//フォルムボタン動作
function megachange(num, num2) {
  var p;
  if(num2==1){
    p = document.nForm.elements['pokename_1'].value;
  }else{
    p = document.nForm.elements['pokename_2'].value;
  }
  if ((p == "コオリッポ") || (p == "コオリッポ(アイス)") || (p == "コオリッポ(ナイス)")) {
    if (parseInt(num) == 0) {
      p = "コオリッポ(アイス)";
    } else if (parseInt(num) == 1) {
      p = "コオリッポ(ナイス)";
    }
  } else if ((p == "イルカマン") || (p == "イルカマン(ナイーブ)") || (p == "イルカマン(マイティ)")) {
    if (parseInt(num) == 0) {
      p = "イルカマン(ナイーブ)";
    } else if (parseInt(num) == 1) {
      p = "イルカマン(マイティ)";
    }
  }
  if(num2==1){
    document.nForm.elements['pokename_1'].value = p;
  }else{
    document.nForm.elements['pokename_2'].value = p;
  }
}


