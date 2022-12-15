
// ボタンで数値代入
function setvalue(elm, num) {
  //document.nForm.elements[elm].value = parseInt(num);
  if (num == "-1") {
    document.nForm.elements[elm].value = "";
  } else {
    document.nForm.elements[elm].value = parseInt(num);
  }
}

/**
 * ポケモン名の変更を検知し、種族値を代入する関数
 * @param {string} 変更を検知するinputのID
 */
setpokemon = (inputId) => {
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
