$(() => {
  $('#pokename_1').autocomplete({
    source: (request, response) => {
      const suggests = [];
      const nameHira = request.term;
      const nameKata = this.hiraToKana(nameHira);

      // ポケモン一覧からカタカナで名前検索
      pokemonAll.pokemons.forEach(element => {
        const name = element.name;
        //入力された文字列がカタカナのポケモン名とひらがなのポケモン名と前方一致するかチェック
        if (name.indexOf(nameHira) === 0 || name.indexOf(nameKata) === 0) {
          // 検索に一致したら候補に追加
          suggests.push(name);
        }
      });

      //ヒットしたポケモン名一覧を候補として返す
      response(suggests);
    },
    autoFocus: true,
    delay: 300,
    minLength: 1,
    select: (e, ui) => {
      // 選択された候補をテキストボックスのvalueにセットする
      $('#pokename_1').val(ui.item.value);

      // 候補が選択されたら攻撃を計算
      set_realvalue("real-value-attack");
    }
  });
})

$(() => {
  $('#pokename_2').autocomplete({
    source: (request, response) => {
      const suggests = [];
      const nameHira = request.term;
      const nameKata = this.hiraToKana(nameHira);

      // ポケモン一覧からカタカナで名前検索
      pokemonAll.pokemons.forEach(element => {
        const name = element.name;
        //入力された文字列がカタカナのポケモン名とひらがなのポケモン名と前方一致するかチェック
        if (name.indexOf(nameHira) === 0 || name.indexOf(nameKata) === 0) {
          // 検索に一致したら候補に追加
          suggests.push(name);
        }
      });

      //ヒットしたポケモン名一覧を候補として返す
      response(suggests);
    },
    autoFocus: true,
    delay: 300,
    minLength: 1,
    select: (e, ui) => {
      // 選択された候補をテキストボックスのvalueにセットする
      $('#pokename_2').val(ui.item.value);

      //候補が選択されたらHPと防御を計算
      set_realvalue("real-value-HP");
      set_realvalue("real-value-defense");
    }
  });
})

// ひらがな→カタカナ変換
this.hiraToKana = (str) => {
  return str.replace(/[\u3041-\u3096]/g, (match) => {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

// カタカナ→ひらがな変換
this.kanaToHira = (str) => {
  return str.replace(/[\u30a1-\u30f6]/g, (match) => {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}
