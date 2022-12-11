$(function(){
	$('#pokename_1').autocomplete({
		source: function(request, response){
			var suggests = [];

			//pokemonの中身をすべてチェック
			$.each(pokemon, function(i, values){
				var katakana = values[0];				//ポケモン名
				var hiragana = kanaToHira(katakana);	//ポケモン名のカタカナ部分をひらがな変換

				//入力された文字列がカタカナのポケモン名とひらがなのポケモン名と前方一致するかチェック
				if(katakana.indexOf(request.term) === 0 || hiragana.indexOf(request.term) === 0){
					//候補に追加
					suggests.push(katakana);
				}
			});

			//ヒットしたポケモン名を候補として返す
			response(suggests);
		  },
		autoFocus: true,
		delay: 300,
		minLength: 1,
		select: function(e, ui){
			//選択された候補をテキストボックスのvalueにセットする
			//本来必要無いがこの処理を入れないとクリックでの選択時にsetpokemonが上手く動作しない
			$('#pokename_1').val(ui.item.value);

			//候補が選択されたらsetpokemon関数を呼び出す
			setpokemon(1);
		}
	});
})

$(function(){
	$('#pokename_2').autocomplete({
		source: function(request, response){
			var suggests = [];

			//pokemonの中身をすべてチェック
			$.each(pokemon, function(i, values){
				var katakana = values[0];				//ポケモン名
				var hiragana = kanaToHira(katakana);	//ポケモン名のカタカナ部分をひらがな変換

				//入力された文字列がカタカナのポケモン名とひらがなのポケモン名と前方一致するかチェック
				if(katakana.indexOf(request.term) === 0 || hiragana.indexOf(request.term) === 0){
					//候補に追加
					suggests.push(katakana);
				}
			});

			//ヒットしたポケモン名を候補として返す
			response(suggests);
		  },
		autoFocus: true,
		delay: 300,
		minLength: 1,
		select: function(e, ui){
			//選択された候補をテキストボックスのvalueにセットする
			//本来必要無いがこの処理を入れないとクリックでの選択時にsetpokemonが上手く動作しない
			$('#pokename_2').val(ui.item.value);

			//候補が選択されたらsetpokemon関数を呼び出す
			setpokemon(2);
		}
	});
})


//カタカナ→ひらがな変換
function kanaToHira(str) {
    return str.replace(/[\u30a1-\u30f6]/g, function(match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}