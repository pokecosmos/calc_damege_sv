//メガシンカボタンの変更
function mega_button(num) {
  if(num==1){
    var p = document.nForm.elements['pokename_1'].value;
  }else{
    var p = document.nForm.elements['pokename_2'].value;
  }
  if ((p == "ニャース") || (p == "ニャース(通常)") || (p == "ニャース(ガラル)")) {
    visi(2, num, "通常", "ガラル");
  } else if ((p == "ウパー") || (p == "ウパー(通常)") || (p == "ウパー(パルデア)")) {
    visi(2, num, "通常", "パルデア");
  } else if ((p == "ケンタロス") || (p == "ケンタロス(かくとう)")|| (p == "ケンタロス(ほのお)")|| (p == "ケンタロス(みず)")) {
    visi(3, num, "かくとう", "ほのお", "みず");
  } else if ((p == "ロトム") || (p == "ロトム(基本)") || (p == "ロトム(FC)")) {
    visi(2, num, "基本", "FC");
  } else if ((p == "ルガルガン") || (p == "ルガルガン(真昼)") || (p == "ルガルガン(真夜中)")) {
    visi(2, num, "真昼", "真夜中");
  } else if ((p == "コオリッポ") || (p == "コオリッポ(アイス)") || (p == "コオリッポ(ナイス)")) {
    visi(2, num, "アイス", "ナイス");
  } else if ((p == "イエッサン") || (p == "イエッサン♂") || (p == "イエッサン♀")) {
    visi(2, num, "♂", "♀");
  } else if ((p == "パフュートン") || (p == "パフュートン♂") || (p == "パフュートン♀")) {
    visi(2, num, "♂", "♀");
  } else if ((p == "イルカマン") || (p == "イルカマン(ナイーブ)") || (p == "イルカマン(マイティ)")) {
    visi(2, num, "ナイーブ", "マイティ");
  } else {
    visi(0, num);
  }
}

function visi(num1, num2, var1, var2, var3, var4) {
  if(num2 == 1){
    if (num1 == 0) {
      document.nForm.elements['mega0'].style.visibility = "hidden";
      document.nForm.elements['mega1'].style.visibility = "hidden";
      document.nForm.elements['mega2'].style.visibility = "hidden";
      document.nForm.elements['mega3'].style.visibility = "hidden";
    } else if (num1 == 1) {
      document.nForm.elements['mega0'].value = var1;
      document.nForm.elements['mega0'].style.visibility = "visible";
      document.nForm.elements['mega1'].style.visibility = "hidden";
      document.nForm.elements['mega2'].style.visibility = "hidden";
      document.nForm.elements['mega3'].style.visibility = "hidden";
    } else if (num1 == 2) {
      document.nForm.elements['mega0'].value = var1;
      document.nForm.elements['mega1'].value = var2;
      document.nForm.elements['mega0'].style.visibility = "visible";
      document.nForm.elements['mega1'].style.visibility = "visible";
      document.nForm.elements['mega2'].style.visibility = "hidden";
      document.nForm.elements['mega3'].style.visibility = "hidden";
    } else if (num1 == 3) {
      document.nForm.elements['mega0'].value = var1;
      document.nForm.elements['mega1'].value = var2;
      document.nForm.elements['mega2'].value = var3;
      document.nForm.elements['mega0'].style.visibility = "visible";
      document.nForm.elements['mega1'].style.visibility = "visible";
      document.nForm.elements['mega2'].style.visibility = "visible";
      document.nForm.elements['mega3'].style.visibility = "hidden";
    } else if (num1 == 4) {
      document.nForm.elements['mega0'].value = var1;
      document.nForm.elements['mega1'].value = var2;
      document.nForm.elements['mega2'].value = var3;
      document.nForm.elements['mega3'].value = var4;
      document.nForm.elements['mega0'].style.visibility = "visible";
      document.nForm.elements['mega1'].style.visibility = "visible";
      document.nForm.elements['mega2'].style.visibility = "visible";
      document.nForm.elements['mega3'].style.visibility = "visible";
    }
  }else{
      if (num1 == 0) {
      document.nForm.elements['mega0b'].style.visibility = "hidden";
      document.nForm.elements['mega1b'].style.visibility = "hidden";
      document.nForm.elements['mega2b'].style.visibility = "hidden";
      document.nForm.elements['mega3b'].style.visibility = "hidden";
    } else if (num1 == 1) {
      document.nForm.elements['mega0b'].value = var1;
      document.nForm.elements['mega0b'].style.visibility = "visible";
      document.nForm.elements['mega1b'].style.visibility = "hidden";
      document.nForm.elements['mega2b'].style.visibility = "hidden";
      document.nForm.elements['mega3b'].style.visibility = "hidden";
    } else if (num1 == 2) {
      document.nForm.elements['mega0b'].value = var1;
      document.nForm.elements['mega1b'].value = var2;
      document.nForm.elements['mega0b'].style.visibility = "visible";
      document.nForm.elements['mega1b'].style.visibility = "visible";
      document.nForm.elements['mega2b'].style.visibility = "hidden";
      document.nForm.elements['mega3b'].style.visibility = "hidden";
    } else if (num1 == 3) {
      document.nForm.elements['mega0b'].value = var1;
      document.nForm.elements['mega1b'].value = var2;
      document.nForm.elements['mega2b'].value = var3;
      document.nForm.elements['mega0b'].style.visibility = "visible";
      document.nForm.elements['mega1b'].style.visibility = "visible";
      document.nForm.elements['mega2b'].style.visibility = "visible";
      document.nForm.elements['mega3b'].style.visibility = "hidden";
    } else if (num1 == 4) {
      document.nForm.elements['mega0b'].value = var1;
      document.nForm.elements['mega1b'].value = var2;
      document.nForm.elements['mega2b'].value = var3;
      document.nForm.elements['mega3b'].value = var4;
      document.nForm.elements['mega0b'].style.visibility = "visible";
      document.nForm.elements['mega1b'].style.visibility = "visible";
      document.nForm.elements['mega2b'].style.visibility = "visible";
      document.nForm.elements['mega3b'].style.visibility = "visible";
    }
  }
}

//メガシンカボタン
function megachange(num, num2) {
  var p;
  if(num2==1){
    p = document.nForm.elements['pokename_1'].value;
  }else{
    p = document.nForm.elements['pokename_2'].value;
  }
  if ((p == "ニャース") || (p == "ニャース(通常)") || (p == "ニャース(ガラル)")) {
    if (parseInt(num) == 0) {
      p = p.replace(/\(ガラル\)/g, "");
      p = p.replace(/\(通常\)/g, "");
      p = "" + p + "(通常)";
    } else if (parseInt(num) == 1) {
      p = p.replace(/\(ガラル\)/g, "");
      p = p.replace(/\(通常\)/g, "");
      p = "" + p + "(ガラル)";
    }
  } else if ((p == "ウパー") || (p == "ウパー(通常)") || (p == "ウパー(パルデア)")) {
    if (parseInt(num) == 0) {
      p = p.replace(/\(パルデア\)/g, "");
      p = p.replace(/\(通常\)/g, "");
      p = "" + p + "(通常)";
    } else if (parseInt(num) == 1) {
      p = p.replace(/\(パルデア\)/g, "");
      p = p.replace(/\(通常\)/g, "");
      p = "" + p + "(パルデア)";
    }
  } else if ((p == "ケンタロス") || (p == "ケンタロス(かくとう)")|| (p == "ケンタロス(ほのお)")|| (p == "ケンタロス(みず)")) {
    if (parseInt(num) == 0) {
      p = "ケンタロス(かくとう)";
    } else if (parseInt(num) == 1) {
      p = "ケンタロス(ほのお)";
    } else if (parseInt(num) == 2) {
      p = "ケンタロス(みず)";
    }
  } else if ((p == "ロトム") || (p == "ロトム(基本)") || (p == "ロトム(FC)")) {
    if (parseInt(num) == 0) {
      p = "ロトム(基本)";
    } else if (parseInt(num) == 1) {
      p = "ロトム(FC)";
    }
  } else if ((p == "ルガルガン") || (p == "ルガルガン(真昼)") || (p == "ルガルガン(真夜中)")) {
    if (parseInt(num) == 0) {
      p = "ルガルガン(真昼)";
    } else if (parseInt(num) == 1) {
      p = "ルガルガン(真夜中)";
    }
  } else if ((p == "コオリッポ") || (p == "コオリッポ(アイス)") || (p == "コオリッポ(ナイス)")) {
    if (parseInt(num) == 0) {
      p = "コオリッポ(アイス)";
    } else if (parseInt(num) == 1) {
      p = "コオリッポ(ナイス)";
    }
  } else if ((p == "イエッサン") || (p == "イエッサン♂") || (p == "イエッサン♀")) {
    if (parseInt(num) == 0) {
      p = "イエッサン♂";
    } else if (parseInt(num) == 1) {
      p = "イエッサン♀";
    }
  } else if ((p == "パフュートン") || (p == "パフュートン♂") || (p == "パフュートン♀")) {
    if (parseInt(num) == 0) {
      p = "イエッサン♂";
    } else if (parseInt(num) == 1) {
      p = "イエッサン♀";
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
  setpokemon();
}

/**
 * 能力値・威力からダメージの最小値・最大値を計算して返す
 * ポケモン対戦考察Wikiのダメージ計算式
 * https://latest.pokewiki.net/%E3%83%80%E3%83%A1%E3%83%BC%E3%82%B8%E8%A8%88%E7%AE%97%E5%BC%8F
 * を参考にダメージ計算をする
 * @returns min: ダメージ最小値, max: ダメージ最大値
 */
const calcDamage = () => {
  const realValueAttack = document.getElementById('real-value-attack').value;
  const realValueDefense = document.getElementById('real-value-defense').value;
  const power = document.nForm.elements['iryoku'].value;
  const level = 50;
  let baseDamage = Math.floor(level * 2 + 5 + 2);
  baseDamage = Math.floor(baseDamage * power * realValueAttack / realValueDefense);
  baseDamage = Math.floor(baseDamage / 50 + 2);
  const minDamage = Math.floor(baseDamage * 0.85);
  const maxDamage = Math.floor(baseDamage * 1.00);
  console.log(`min: ${minDamage}, max: ${maxDamage}`);
  document.getElementById('real-value-damage').textContent = `ダメージ：min: ${minDamage}, max: ${maxDamage}`
}
