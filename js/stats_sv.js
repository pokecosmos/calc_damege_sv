// 起動時の処理
window.onload = () => {
  addOption("select_ability_a1", ability.ability_a1);
  addOption("select_ability_a2", ability.ability_a2);
  addOption("select_ability_b1", ability.ability_b1);
  addOption("select_ability_b2", ability.ability_b2);
  addOption("select_item_a1", ability.item_a1);
  addOption("select_item_b1", ability.item_b1);
  addWaza();
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

addWaza = () => {
  // selectタグを取得する
  const select = document.getElementById("select_waza_a1");

  ability.waza.forEach(element => {
    // optionタグを作成する
    const option = document.createElement("option");
    // optionタグのテキストを設定する
    option.text =element.name;
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
//setPokemon = (inputId) => {
//  // mega_button(num1);
//  // inputからポケモン名を取得する
//  const inputValue = document.nForm.elements[inputId].value;
//
//  // 入力されたポケモン名から種族値などを検索する
//  const selectedPokemon = pokemonAll.pokemons.find(pokemon => {
//    return pokemon.name === inputValue;
//  });
//
//  if (selectedPokemon) {
//    switch (inputId) {
//      case 'pokename_1':
//        console.log(`攻撃種族値:${selectedPokemon.attackBaseStats}, 特攻種族値${selectedPokemon.specialAttackBaseStats}`);
//        break;
//      case 'pokename_2':
//        console.log(`防御種族値:${selectedPokemon.defenseBaseStats}, 特防種族値${selectedPokemon.specialDefenseBaseStats}`);
//        break;
//      default:
//        break;
//    }
//  }
//}


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
function syousai_table(){
  
  //チェックボッスとラベルが事前に存在すれば削除
  if( document.getElementById('s1_pawatori') !== null ){
    var tableElem = document.getElementById('syousai_1');
    tableElem.tBodies[0].deleteRow(-1);
    tableElem.tBodies[0].deleteRow(-1);
  }else{
  //1行目
  var table = document.getElementById('syousai_1');
  var newRow = table.insertRow();
  var newCell = newRow.insertCell();
  
  syousai_check_add(newCell,"でんこうそうげき","s1_denkou");
  newCell = newRow.insertCell();
  syousai_check_add(newCell,"もえつきる","s1_moetukiru");
  newCell = newRow.insertCell();  
  syousai_check_add(newCell,"みずびたし","s1_mizubitasi");
  newCell = newRow.insertCell();
  syousai_check_add(newCell,"まほうのこな","s1_mahounokona");
  
  //2行目
  var table = document.getElementById('syousai_1');
  var newRow = table.insertRow();
  var newCell = newRow.insertCell();
  
  syousai_check_add(newCell,"パワートリック","s1_pawatori");
  newCell = newRow.insertCell();
  syousai_check_add(newCell,"じゅうでん","s1_jyuden");
  }
}

//詳細設定ボタン2 表示・非表示
function syousai_table2(){
  
  //チェックボッスとラベルが事前に存在すれば削除
  if( document.getElementById('s2_pawatori') !== null ){
    var tableElem = document.getElementById('syousai_2');
    tableElem.tBodies[0].deleteRow(-1);
    tableElem.tBodies[0].deleteRow(-1);
    tableElem.tBodies[0].deleteRow(-1);
  }else{
  //1行目
  var table = document.getElementById('syousai_2');
  var newRow = table.insertRow();
  var newCell = newRow.insertCell();

  syousai_check_add(newCell,"でんこうそうげき","s2_denkou");
  newCell = newRow.insertCell();
  syousai_check_add(newCell,"もえつきる","s2_moetukiru");
  newCell = newRow.insertCell();
  syousai_check_add(newCell,"みずびたし","s2_mizubitasi");
  newCell = newRow.insertCell();
  syousai_check_add(newCell,"まほうのこな","s2_mahounokona");
  
  //2行目
  var table = document.getElementById('syousai_2');
  var newRow = table.insertRow();
  var newCell = newRow.insertCell();
  
  syousai_check_add(newCell,"きょけんとつげき","s2_kyoken");
  newCell = newRow.insertCell();
  syousai_check_add(newCell,"はねやすめ","s2_haneyasume");
  newCell = newRow.insertCell();
  syousai_check_add(newCell,"うちおとす","s2_utiotosu");
  newCell = newRow.insertCell();
  syousai_check_add(newCell,"でんじふゆう","s2_denjihuyuu");

  //3行目
  var table = document.getElementById('syousai_2');
  var newRow = table.insertRow();
  var newCell = newRow.insertCell();
  
  syousai_check_add(newCell,"パワートリック","s2_pawatori");
  newCell = newRow.insertCell();
  syousai_check_add(newCell,"タールショット","s2_ta-ru");
  }
}

//チェックボタン追加（なぜかチェックボタンのサイズが合わない）
function syousai_check_add(newCell,n1,n2){
  var label = document.createElement("label");
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add("check");
  checkbox.id = n2;
  label.classList.add("chk");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(n1));
  newCell.appendChild(label);
}


//--技威力
waza_iryokuhenka = () => {
  //チェックボッスとラベルが事前に存在すれば削除
  if( document.getElementById('waza_o1') !== null ){
    document.getElementById('waza_o1').remove();
  }
  if( document.getElementById('waza_o2') !== null ){
    document.getElementById('waza_o2').remove();
  }
  if( document.getElementById('waza_o3') !== null ){
    document.getElementById('waza_o3').remove();
    document.getElementById('waza_o4').remove();
  }
  
  var obj = document.getElementById('select_waza_a1');
  var idx = obj.selectedIndex;
  var txt = obj.options[idx].text;
  
  
  ability.waza.forEach(element => {
    if(element.name == txt){
      //--チェックボックス等を追加
      if(element.iryokuhenka == 1){
        waza_iryokuhenka_add(txt);
      }else if(element.iryokuhenka == 2){
        waza_iryokuhenka_add2(txt);
      }else if(element.iryokuhenka == 3){
        waza_iryokuhenka_add3(txt);
      }else if(element.iryokuhenka == 4){
        waza_iryokuhenka_add4(txt);
      }
      //--技の基本威力、タイプ、命中率、急所率を反映
      //element.buturi
      if(element.buturi == 1){
        radio_buturi();
      }else if(element.buturi == 0){
        radio_tokusyu();
      }
      document.getElementById('iryoku').value = element.iryoku;
      document.getElementById('waza_type').querySelector(`option[value = '${element.type}']` ).selected = true;
      //なおすぞ！！
      //document.getElementById('accuracy').value = element.meityu;
      document.getElementById('accuracy').querySelector(`option[value = '${element.meityu}']` ).selected = true;
      document.getElementById('critical').querySelector(`option[value = '${element.kyuusyo}']` ).selected = true;
    }
  });
}
radio_buturi = (txt) => {
  document.getElementById('buturi').checked = true;
  document.getElementById('tokusyu').checked = false;
  
  if(document.getElementById("select_waza_a1").value != "ボディプレス"){
    document.getElementById("ac_1").innerHTML = "攻撃";
    document.getElementById('ac_2').innerHTML = "攻撃";
  }else{
    document.getElementById("ac_1").innerHTML = "防御";
    document.getElementById('ac_2').innerHTML = "防御";
  }
  document.getElementById('ac_3').innerHTML = "防御";
  document.getElementById('ac_4').innerHTML = "防御";
}

radio_tokusyu = (txt) => {
  document.getElementById('buturi').checked = false;
  document.getElementById('tokusyu').checked = true;
  document.getElementById("ac_1").innerHTML = "特攻";
  document.getElementById('ac_2').innerHTML = "特攻";
  if((document.getElementById("select_waza_a1").value != "サイコショック")&&(document.getElementById("select_waza_a1").value != "サイコブレイク")){
    document.getElementById('ac_3').innerHTML = "特防";
    document.getElementById('ac_4').innerHTML = "特防";
  }else{
    document.getElementById('ac_3').innerHTML = "防御";
    document.getElementById('ac_4').innerHTML = "防御";
  }
}

waza_iryokuhenka_add = (txt) => {
  
  //チェックボックスとラベルを追加
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.class = 'check';
  checkbox.id = 'waza_o1';
  
  var label = document.createElement('label')
  label.id = 'waza_o2';
  label.appendChild(checkbox);
  //技によってここの表示を変える。
  if(txt == "アクロバット"){
    label.appendChild(document.createTextNode('道具なし 威力2倍'));
  }else if(txt == "ウェザーボール"){
    label.appendChild(document.createTextNode('天候変化 タイプ変化＆威力2倍'));
  }else if(txt == "だいちのはどう"){
    label.appendChild(document.createTextNode('フィールド変化＆接地 タイプ変化＆威力2倍'));
  }else if(txt == "うっぷんばらし"){
    label.appendChild(document.createTextNode('能力下降 威力2倍'));
  }else if((txt == "かぜおこし") || (txt == "たつまき")){
    label.appendChild(document.createTextNode('相手そらをとぶ 威力2倍'));
  }else if(txt == "かたきうち"){
    label.appendChild(document.createTextNode('味方瀕死 威力2倍'));
  }else if(txt == "からげんき"){
    label.appendChild(document.createTextNode('状態異常 威力2倍'));
  }else if(txt == "ころがる"){
    label.appendChild(document.createTextNode('まるくなる 威力2倍'));
  }else if(txt == "しおみず"){
    label.appendChild(document.createTextNode('相手HP半分以下 威力2倍'));
  }else if(txt == "しっぺがえし"){
    label.appendChild(document.createTextNode('後攻 威力2倍'));
  }else if(txt == "Gのちから"){
    label.appendChild(document.createTextNode('重力 威力1.5倍'));
  }else if(txt == "じしん"){
    label.appendChild(document.createTextNode('相手あなをほる 威力2倍'));
  }else if(txt == "じだんだ"){
    label.appendChild(document.createTextNode('技失敗 威力2倍'));
  }else if((txt == "ソーラーブレード") || (txt == "ソーラービーム")){
    label.appendChild(document.createTextNode('悪天候 威力1/2倍'));
  }else if((txt == "たたりめ") || (txt == "ひゃっきやこう")){
    label.appendChild(document.createTextNode('相手状態異常 威力2倍'));
  }else if(txt == "ダメおし"){
    label.appendChild(document.createTextNode('相手ダメージ 威力2倍'));
  }else if(txt == "なみのり"){
    label.appendChild(document.createTextNode('相手ダイビング 威力2倍'));
  }else if(txt == "ゆきなだれ"){
    label.appendChild(document.createTextNode('自分ダメージ 威力2倍'));
  }else if((txt == "でんこうそうげき")||(txt == "もえつきる")){
    label.appendChild(document.createTextNode('タイプ不一致 失敗'));
  }else if((txt == "どくばりセンボン")||(txt == "ベノムショック")){
    label.appendChild(document.createTextNode('相手が毒 威力2倍'));
  }else if((txt == "のしかかり")||(txt == "ふみつけ")||(txt == "ドラゴンダイブ")||(txt == "フライングプレス")||(txt == "ヒートスタンプ")||(txt == "ヘビーボンバー")){
    label.appendChild(document.createTextNode('相手ちいさくなる 必中＆威力2倍'));
  }else if(txt == "はたきおとす"){
    label.appendChild(document.createTextNode('相手道具あり 威力1.5倍'));
  }else if(txt == "ふぶき"){
    label.appendChild(document.createTextNode('雪 必中'));
  }else if((txt == "ほのおのちかい")||(txt == "くさのちかい")||(txt == "みずのちかい")){
    label.appendChild(document.createTextNode('合体技 威力150'));
  }else if(txt == "ミストバースト"){
    label.appendChild(document.createTextNode('ミストフィールド＆接地 威力1.5倍'));
  }else if(txt == "めざめるダンス"){
    label.appendChild(document.createTextNode('技のタイプが自分のタイプ1と同じになる'));
  }else if(txt == "ライジングボルト"){
    label.appendChild(document.createTextNode('エレキフィールド＆相手接地 威力2倍'));
  }else if(txt == "ワイドフォース"){
    label.appendChild(document.createTextNode('サイコフィールド＆接地 範囲技化＆威力1.5倍'));
  }else if(txt == "グラススライダー"){
    label.appendChild(document.createTextNode('先制技化'));
  }else if(txt == "りんしょう"){
    label.appendChild(document.createTextNode('2番手以降 威力2倍'));
  }else{
    label.appendChild(document.createTextNode(txt));
  }

  var container = document.getElementById('waza_iryoku_option');
  container.appendChild(label);
}

waza_iryokuhenka_add2 = (txt) => {
  
  //チェックボックス2個の技
  //左側のチェックボックスの反応範囲がおかしいバグがある。チェックボックス1個側も変。ラジオボタンも変。
  var checkbox1 = document.createElement('input');
  checkbox1.type = 'checkbox';
  checkbox1.class = 'check';
  checkbox1.id = 'waza_o1';
  var label1 = document.createElement('label')
  label1.id = 'waza_o2';
  label1.appendChild(checkbox1);
  label1.appendChild(document.createTextNode('雨 必中'));
  var container = document.getElementById('waza_iryoku_option');
  container.appendChild(label1);
  
  var checkbox2 = document.createElement('input');
  checkbox2.type = 'checkbox';
  checkbox2.class = 'check';
  checkbox2.id = 'waza_o3';
  var label2 = document.createElement('label')
  label2.id = 'waza_o4';
  label2.appendChild(checkbox2);
  label2.appendChild(document.createTextNode('晴れ 命中率50'));
  var container2 = document.getElementById('waza_iryoku_option2');
  container2.appendChild(label2);
}

waza_iryokuhenka_add3 = (txt) => {
  
  //チェックボックスなし
  var label = document.createElement('label')
  label.id = 'waza_o2';
  
  if((txt == "アクセルブレイク")||(txt == "イナズマドライブ")){
    label.appendChild(document.createTextNode('抜群補正 4/3倍'));
  }else if((txt == "サイコショック") || (txt == "サイコブレイク")){
    label.appendChild(document.createTextNode('相手の防御で計算'));
  }else if((txt == "せいなるつるぎ") ||(txt == "DDラリアット")){
    label.appendChild(document.createTextNode('相手能力変化 無効'));
  }else if(txt == "ボディプレス"){
    label.appendChild(document.createTextNode('防御で計算'));
  }else if(txt == "イカサマ"){
    label.appendChild(document.createTextNode('相手の攻撃で計算'));
  }else if(txt == "テラバースト"){
    label.appendChild(document.createTextNode('テラスタル タイプ変化'));
  }else if(txt == "レイジングブル"){
    label.appendChild(document.createTextNode('ケンタロスのフォルムにタイプ変化'));
  }
  
  var container = document.getElementById('waza_iryoku_option');
  container.appendChild(label);
}

waza_iryokuhenka_add4 = (txt) => {   
  //ドラゴンアローの回数
  
  var input_radio0 = document.createElement("input");
  var input_radio1 = document.createElement("input");
  
  input_radio0.type = "radio";
  input_radio1.type = "radio";
  input_radio0.name = "my_radio";
  input_radio1.name = "my_radio";
  input_radio0.id = "waza_o1";
  input_radio1.id = "waza_o3";
  input_radio1.checked = true ;
  
  document.body.appendChild(input_radio0);
  document.body.appendChild(input_radio1);
  
  
  var label0 = document.createElement("label")
  var label1 = document.createElement("label")
  label0.id = "waza_o2";
  label1.id = "waza_o4";
  label0.appendChild(input_radio0);
  label1.appendChild(input_radio1);
  label0.appendChild(document.createTextNode("1回"));
  label1.appendChild(document.createTextNode("2回"));
  
  var container = document.getElementById("waza_iryoku_option");
  container.appendChild(label0);
  container.appendChild(label1);
}