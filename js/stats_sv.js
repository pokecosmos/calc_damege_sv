// 起動時の処理
window.onload = () => {
  addOption("select_ability_a1", ability.ability_a1);
  addOption("select_ability_a2", ability.ability_a2);
  addOption("select_ability_b1", ability.ability_b1);
  addOption("select_ability_b2", ability.ability_b2);
  addOption("select_item_a1", ability.item_a1);
  addOption("select_item_b1", ability.item_b1);
}

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
    // optionタグのテキストを設定する
    option.text =element.name + "：" + element.explanation;
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


/**
 * ポケモン名の変更を検知し、種族値を代入する関数
 * @param {string} 変更を検知するinputのID
 */
setPokemon = (inputId) => {
  // mega_button(num1);
  // inputからポケモン名を取得する
  const inputValue = document.nForm.elements[inputId].value;

  // 入力されたポケモン名から種族値などを検索する
  const selectedPokemon = pokemonAll.pokemons.find(pokemon => {
    return pokemon.name === inputValue;
  });

  if (selectedPokemon) {
    switch (inputId) {
      case 'pokename_1':
        console.log(`攻撃種族値:${selectedPokemon.attackBaseStats}, 特攻種族値${selectedPokemon.specialAttackBaseStats}`);
        break;
      case 'pokename_2':
        console.log(`防御種族値:${selectedPokemon.defenseBaseStats}, 特防種族値${selectedPokemon.specialDefenseBaseStats}`);
        break;
      default:
        break;
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

//詳細設定ボタン1 表示・非表示
//削除方法未定、チェックボックスのサイズが合わない。
function syousai_table(){
  var table = document.getElementById('syousai_1');
  var newRow = table.insertRow();
  var newCell = newRow.insertCell();
  
  var newText = document.createTextNode('パワートリック');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.class = 'check';
  //checkbox.id = 'car';
  //checkbox.name = 'interest';
  //checkbox.value = 'car';
  newCell.appendChild(checkbox);
  newCell.appendChild(newText);
  newCell = newRow.insertCell();
  
  newText = document.createTextNode('じゅうでん');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.class = 'check';
  //checkbox.id = 'car';
  //checkbox.name = 'interest';
  //checkbox.value = 'car';
  newCell.appendChild(checkbox);
  newCell.appendChild(newText);
}

