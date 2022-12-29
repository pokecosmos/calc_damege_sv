const ability = {

  "waza": [
    {"name":"アーマーキャノン","type":"ほのお","iryoku":120,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"アームハンマー","type":"かくとう","iryoku":100,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"アイアンテール","type":"はがね","iryoku":100,"meityu":75,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"アイアンヘッド","type":"はがね","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"アイアンローラー","type":"はがね","iryoku":130,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"アイススピナー","type":"こおり","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"アイスハンマー","type":"こおり","iryoku":100,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"アクアカッター","type":"みず","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"アクアジェット","type":"みず","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"アクアステップ","type":"みず","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"アクアテール","type":"みず","iryoku":90,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"アクアブレイク","type":"みず","iryoku":85,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"あくうせつだん","type":"ドラゴン","iryoku":100,"meityu":95,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"アクセルブレイク","type":"かくとう","iryoku":100,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":3},
    {"name":"アクセルロック","type":"いわ","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"あくのはどう","type":"あく","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"アクロバット","type":"ひこう","iryoku":55,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"アシストパワー","type":"エスパー","iryoku":20,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"アシッドボム","type":"どく","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":1,"iryokuhenka":0},
    {"name":"アストラルビット","type":"ゴースト","iryoku":120,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"あなをほる","type":"じめん","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"あばれる","type":"ノーマル","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"あんこくきょうだ","type":"あく","iryoku":75,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":3,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"いあいぎり","type":"ノーマル","iryoku":50,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"イカサマ","type":"あく","iryoku":95,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":3},
    {"name":"いじげんホール","type":"エスパー","iryoku":80,"meityu":"必中","buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"いじげんラッシュ","type":"あく","iryoku":100,"meityu":"必中","buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"いっちょうあがり","type":"ドラゴン","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"いてつくしせん","type":"エスパー","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"イナズマドライブ","type":"でんき","iryoku":100,"meityu":100,"buturi":0,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":3},
    {"name":"いにしえのうた","type":"ノーマル","iryoku":75,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"いびき","type":"ノーマル","iryoku":50,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"いわおとし","type":"いわ","iryoku":50,"meityu":90,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"いわくだき","type":"かくとう","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"いわなだれ","type":"いわ","iryoku":75,"meityu":90,"buturi":1,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"インファイト","type":"かくとう","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ウェーブタックル","type":"みず","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":1,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ウェザーボール","type":"ノーマル","iryoku":50,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":0,"iryokuhenka":1},
    {"name":"うずしお","type":"みず","iryoku":35,"meityu":85,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"うちおとす","type":"いわ","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ウッドハンマー","type":"くさ","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":1,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ウッドホーン","type":"くさ","iryoku":75,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"うっぷんばらし","type":"あく","iryoku":75,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"うらみつらみ","type":"ゴースト","iryoku":75,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"エアカッター","type":"ひこう","iryoku":60,"meityu":95,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"エアスラッシュ","type":"ひこう","iryoku":75,"meityu":95,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"エコーボイス","type":"ノーマル","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"えだづき","type":"くさ","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"エナジーボール","type":"くさ","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":1,"iryokuhenka":0},
    {"name":"エレキネット","type":"でんき","iryoku":55,"meityu":95,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"エレキボール","type":"でんき","iryoku":150,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":0,"iryokuhenka":1},
    {"name":"オーバードライブ","type":"でんき","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"オーバーヒート","type":"ほのお","iryoku":130,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"オーラウイング","type":"エスパー","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"オーロラビーム","type":"こおり","iryoku":65,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"おどろかす","type":"ゴースト","iryoku":30,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"おはかまいり","type":"ゴースト","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"かいりき","type":"ノーマル","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"かえんぐるま","type":"ほのお","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"かえんほうしゃ","type":"ほのお","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"かえんボール","type":"ほのお","iryoku":120,"meityu":90,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"かかとおとし","type":"かくとう","iryoku":120,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"かげうち","type":"ゴースト","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"かげぬい","type":"ゴースト","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"かぜおこし","type":"ひこう","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"かたきうち","type":"ノーマル","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"かふんだんご","type":"むし","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":0,"iryokuhenka":0},
    {"name":"かみくだく","type":"あく","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":1,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"かみつく","type":"あく","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":1,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"かみなり","type":"でんき","iryoku":110,"meityu":70,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":2},
    {"name":"かみなりあらし","type":"でんき","iryoku":100,"meityu":80,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":2},
    {"name":"かみなりのキバ","type":"でんき","iryoku":65,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":1,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"かみなりパンチ","type":"でんき","iryoku":75,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"からげんき","type":"ノーマル","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ガリョウテンセイ","type":"ひこう","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"かわらわり","type":"かくとう","iryoku":75,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"がんせきアックス","type":"いわ","iryoku":65,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"がんせきふうじ","type":"いわ","iryoku":60,"meityu":95,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"きあいだま","type":"かくとう","iryoku":120,"meityu":70,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":1,"iryokuhenka":0},
    {"name":"きあいパンチ","type":"かくとう","iryoku":150,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ギガインパクト","type":"ノーマル","iryoku":150,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ギガドレイン","type":"くさ","iryoku":75,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"きしかいせい","type":"かくとう","iryoku":200,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"きゅうけつ","type":"むし","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"きょけんとつげき","type":"ドラゴン","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"きょじゅうざん","type":"はがね","iryoku":100,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"きょじゅうだん","type":"はがね","iryoku":100,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"キラースピン","type":"どく","iryoku":30,"meityu":100,"buturi":1,"tyokusetu":1,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"きりさく","type":"ノーマル","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"クイックターン","type":"みず","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"くさのちかい","type":"くさ","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"くさむすび","type":"くさ","iryoku":120,"meityu":100,"buturi":0,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"くさわけ","type":"くさ","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"くらいつく","type":"あく","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":1,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"グラススライダー","type":"くさ","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":2,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"クラブハンマー","type":"みず","iryoku":100,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"クリアスモッグ","type":"どく","iryoku":50,"meityu":"必中","buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"クロスチョップ","type":"かくとう","iryoku":100,"meityu":80,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"クロスポイズン","type":"どく","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"クロロブラスト","type":"くさ","iryoku":150,"meityu":95,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"げきりん","type":"ドラゴン","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"けたぐり","type":"かくとう","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ゲップ","type":"どく","iryoku":120,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"げんしのちから","type":"いわ","iryoku":60,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"こうげきしれい","type":"むし","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"こうそくスピン","type":"ノーマル","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ゴーストダイブ","type":"ゴースト","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"こおりのいぶき","type":"こおり","iryoku":60,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":3,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"こおりのキバ","type":"こおり","iryoku":65,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":1,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"こおりのつぶて","type":"こおり","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ゴールドラッシュ","type":"はがね","iryoku":120,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"こがらしあらし","type":"ひこう","iryoku":100,"meityu":80,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":2},
    {"name":"こごえるかぜ","type":"こおり","iryoku":55,"meityu":95,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ゴッドバード","type":"ひこう","iryoku":140,"meityu":90,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"こなゆき","type":"こおり","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"このは","type":"くさ","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"コメットパンチ","type":"はがね","iryoku":90,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ころがる","type":"いわ","iryoku":30,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"こんげんのはどう","type":"みず","iryoku":110,"meityu":85,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"サイケこうせん","type":"エスパー","iryoku":65,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"サイコカッター","type":"エスパー","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"サイコキネシス","type":"エスパー","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"サイコショック","type":"エスパー","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":3},
    {"name":"サイコファング","type":"エスパー","iryoku":85,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":1,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"サイコブレイク","type":"エスパー","iryoku":100,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":3},
    {"name":"さばきのつぶて","type":"ノーマル","iryoku":100,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"さわぐ","type":"ノーマル","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"サンダープリズン","type":"でんき","iryoku":80,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"3ぼんのや","type":"かくとう","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"Gのちから","type":"くさ","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":1},
    {"name":"ジェットパンチ","type":"みず","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"シェルアームズ","type":"どく","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"シェルブレード","type":"みず","iryoku":75,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"しおづけ","type":"いわ","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"しおふき","type":"みず","iryoku":150,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"しおみず","type":"みず","iryoku":65,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"じごくづき","type":"あく","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"シザークロス","type":"むし","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"じしん","type":"じめん","iryoku":100,"meityu":100,"buturi":1,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"したでなめる","type":"ゴースト","iryoku":30,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"じたばた","type":"ノーマル","iryoku":200,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"じだんだ","type":"じめん","iryoku":75,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"しっとのほのお","type":"ほのお","iryoku":70,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"しっぺがえし","type":"あく","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"じならし","type":"じめん","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"しねんのずつき","type":"エスパー","iryoku":80,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"じばく","type":"ノーマル","iryoku":200,"meityu":100,"buturi":1,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"しめつける","type":"ノーマル","iryoku":15,"meityu":85,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ジャイロボール","type":"はがね","iryoku":150,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":0,"iryokuhenka":1},
    {"name":"シャドークロー","type":"ゴースト","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"シャドーダイブ","type":"ゴースト","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"シャドーパンチ","type":"ゴースト","iryoku":60,"meityu":"必中","buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"シャドーボール","type":"ゴースト","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":1,"iryokuhenka":0},
    {"name":"じゃれつく","type":"フェアリー","iryoku":90,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"10まんばりき","type":"じめん","iryoku":95,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"10まんボルト","type":"でんき","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"しんくうは","type":"かくとう","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"しんそく","type":"ノーマル","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"じんつうりき","type":"エスパー","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"しんぴのちから","type":"エスパー","iryoku":70,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"スイープビンタ","type":"ノーマル","iryoku":25,"meityu":85,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"すいとる","type":"くさ","iryoku":20,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"すいりゅうれんだ","type":"みず","iryoku":25,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":3,"renzoku":3,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"スケイルショット","type":"ドラゴン","iryoku":25,"meityu":90,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"スチームバースト","type":"みず","iryoku":110,"meityu":95,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ずつき","type":"ノーマル","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"すてみタックル","type":"ノーマル","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":1,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ストーンエッジ","type":"いわ","iryoku":100,"meityu":80,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"すなじごく","type":"じめん","iryoku":35,"meityu":85,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"スパーク","type":"でんき","iryoku":65,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"スピードスター","type":"ノーマル","iryoku":60,"meityu":"必中","buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"スマートホーン","type":"はがね","iryoku":70,"meityu":"必中","buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"スモッグ","type":"どく","iryoku":30,"meityu":70,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"せいなるつるぎ","type":"かくとう","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":3},
    {"name":"ソウルクラッシュ","type":"フェアリー","iryoku":75,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ソーラービーム","type":"くさ","iryoku":120,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ソーラーブレード","type":"くさ","iryoku":125,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"そらをとぶ","type":"ひこう","iryoku":90,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"たいあたり","type":"ノーマル","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"だいちのちから","type":"じめん","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"だいちのはどう","type":"ノーマル","iryoku":50,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"だいばくはつ","type":"ノーマル","iryoku":250,"meityu":100,"buturi":1,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ダイビング","type":"みず","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"だいふんげき","type":"ほのお","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ダイマックスほう","type":"ドラゴン","iryoku":100,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"だいもんじ","type":"ほのお","iryoku":110,"meityu":85,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ダイヤストーム","type":"いわ","iryoku":100,"meityu":95,"buturi":1,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"たきのぼり","type":"みず","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"だくりゅう","type":"みず","iryoku":90,"meityu":85,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ダストシュート","type":"どく","iryoku":120,"meityu":80,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"たたきつける","type":"ノーマル","iryoku":80,"meityu":75,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"たたりめ","type":"ゴースト","iryoku":65,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"たつまき","type":"ドラゴン","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":1},
    {"name":"タネばくだん","type":"くさ","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":0,"iryokuhenka":0},
    {"name":"タネマシンガン","type":"くさ","iryoku":25,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ダブルアタック","type":"ノーマル","iryoku":35,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":2,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ダブルウイング","type":"ひこう","iryoku":40,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":2,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ダメおし","type":"あく","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"だんがいのつるぎ","type":"じめん","iryoku":120,"meityu":85,"buturi":1,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"チャージビーム","type":"でんき","iryoku":50,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"チャームボイス","type":"フェアリー","iryoku":40,"meityu":"必中","buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ついばむ","type":"ひこう","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ツインビーム","type":"エスパー","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":2,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"つけあがる","type":"あく","iryoku":20,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"つじぎり","type":"あく","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"つつく","type":"ひこう","iryoku":35,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"つっぱり","type":"かくとう","iryoku":15,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"つのでつく","type":"ノーマル","iryoku":65,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"つばさでうつ","type":"ひこう","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"つばめがえし","type":"ひこう","iryoku":60,"meityu":"必中","buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"つららおとし","type":"こおり","iryoku":85,"meityu":90,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"つららばり","type":"こおり","iryoku":25,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"つるのムチ","type":"くさ","iryoku":45,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"であいがしら","type":"むし","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"DDラリアット","type":"あく","iryoku":85,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":3},
    {"name":"てかげん","type":"ノーマル","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"デカハンマー","type":"はがね","iryoku":160,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"てっていこうせん","type":"はがね","iryoku":140,"meityu":95,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"テラバースト","type":"ノーマル","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":3},
    {"name":"でんきショック","type":"でんき","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"でんげきは","type":"でんき","iryoku":60,"meityu":"必中","buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"でんこうせっか","type":"ノーマル","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"でんこうそうげき","type":"でんき","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"でんじほう","type":"でんき","iryoku":120,"meityu":50,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ときのほうこう","type":"ドラゴン","iryoku":150,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"どくづき","type":"どく","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"どくどくのキバ","type":"どく","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":1,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"どくばり","type":"どく","iryoku":15,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"どくばりセンボン","type":"どく","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":1},
    {"name":"どげざつき","type":"あく","iryoku":80,"meityu":"必中","buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ドゲザン","type":"あく","iryoku":85,"meityu":"必中","buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"とっしん","type":"ノーマル","iryoku":90,"meityu":85,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":1,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"とっておき","type":"ノーマル","iryoku":140,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"とどめばり","type":"むし","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"とびかかる","type":"むし","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"とびつく","type":"むし","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"とびはねる","type":"ひこう","iryoku":85,"meityu":85,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"とびひざげり","type":"かくとう","iryoku":130,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ともえなげ","type":"かくとう","iryoku":60,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"トライアタック","type":"ノーマル","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ドラゴンアロー","type":"ドラゴン","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":2,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":4},
    {"name":"ドラゴンエナジー","type":"ドラゴン","iryoku":150,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ドラゴンクロー","type":"ドラゴン","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ドラゴンダイブ","type":"ドラゴン","iryoku":100,"meityu":75,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":1},
    {"name":"ドラゴンテール","type":"ドラゴン","iryoku":60,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ドラムアタック","type":"くさ","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"トリックフラワー","type":"くさ","iryoku":70,"meityu":"必中","buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":3,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"トリプルアクセル","type":"こおり","iryoku":20,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":13,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"トリプルダイブ","type":"みず","iryoku":30,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":3,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ドリルくちばし","type":"ひこう","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ドリルライナー","type":"じめん","iryoku":80,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ドレインキッス","type":"フェアリー","iryoku":50,"meityu":100,"buturi":0,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ドレインパンチ","type":"かくとう","iryoku":75,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"どろかけ","type":"じめん","iryoku":20,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"トロピカルキック","type":"くさ","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"どろぼう","type":"あく","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"とんぼがえり","type":"むし","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ナイトバースト","type":"あく","iryoku":85,"meityu":95,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"なげつける","type":"あく","iryoku":130,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"なみのり","type":"みず","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"にどげり","type":"かくとう","iryoku":30,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":2,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ニトロチャージ","type":"ほのお","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ねこだまし","type":"ノーマル","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ネコにこばん","type":"ノーマル","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ネズミざん","type":"ノーマル","iryoku":20,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":110,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ねっさのあらし","type":"じめん","iryoku":100,"meityu":80,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":2},
    {"name":"ねっさのだいち","type":"じめん","iryoku":70,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ねっとう","type":"みず","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ねっぷう","type":"ほのお","iryoku":95,"meityu":90,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ねらいうち","type":"みず","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ねんりき","type":"エスパー","iryoku":50,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"のしかかり","type":"ノーマル","iryoku":85,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":1},
    {"name":"バークアウト","type":"あく","iryoku":55,"meityu":95,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ハードプラント","type":"くさ","iryoku":150,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ハイドロカノン","type":"みず","iryoku":150,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ハイドロポンプ","type":"みず","iryoku":110,"meityu":80,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ハイパードリル","type":"ノーマル","iryoku":100,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ハイパーボイス","type":"ノーマル","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"はいよるいちげき","type":"むし","iryoku":70,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"はかいこうせん","type":"ノーマル","iryoku":150,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ばかぢから","type":"かくとう","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"はがねのつばさ","type":"はがね","iryoku":70,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"はきだす","type":"ノーマル","iryoku":100,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ばくおんぱ","type":"ノーマル","iryoku":140,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ばくれつパンチ","type":"かくとう","iryoku":100,"meityu":50,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"はさむ","type":"ノーマル","iryoku":55,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"はたきおとす","type":"あく","iryoku":65,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"はたく","type":"ノーマル","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"はっけい","type":"かくとう","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"はっぱカッター","type":"くさ","iryoku":55,"meityu":95,"buturi":1,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"はどうだん","type":"かくとう","iryoku":80,"meityu":"必中","buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":0,"iryokuhenka":0},
    {"name":"はなびらのまい","type":"くさ","iryoku":120,"meityu":100,"buturi":0,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"はなふぶき","type":"くさ","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"バブルこうせん","type":"みず","iryoku":65,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"パラボラチャージ","type":"でんき","iryoku":65,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"バリアーラッシュ","type":"エスパー","iryoku":70,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"はるのあらし","type":"フェアリー","iryoku":100,"meityu":80,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"バレットパンチ","type":"はがね","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"パワーウィップ","type":"くさ","iryoku":120,"meityu":85,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"パワージェム","type":"いわ","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ヒートスタンプ","type":"ほのお","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ひけん・ちえなみ","type":"あく","iryoku":65,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ひっかく","type":"ノーマル","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ひのこ","type":"ほのお","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ひゃっきやこう","type":"ゴースト","iryoku":60,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":1},
    {"name":"ひやみず","type":"みず","iryoku":50,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ひょうざんおろし","type":"こおり","iryoku":100,"meityu":85,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"びりびりちくちく","type":"でんき","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ふいうち","type":"あく","iryoku":70,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"Vジェネレート","type":"ほのお","iryoku":180,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"フェイタルクロー","type":"どく","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"フェイント","type":"ノーマル","iryoku":30,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ぶきみなじゅもん","type":"エスパー","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ふくろだたき","type":"あく","iryoku":1,"meityu":100,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ぶちかまし","type":"じめん","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ふぶき","type":"こおり","iryoku":110,"meityu":70,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":1},
    {"name":"ふみつけ","type":"ノーマル","iryoku":65,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":1},
    {"name":"フライングプレス","type":"かくとう","iryoku":100,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ブラストバーン","type":"ほのお","iryoku":150,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"フリーズドライ","type":"こおり","iryoku":70,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":1},
    {"name":"ブリザードランス","type":"こおり","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"フルールカノン","type":"フェアリー","iryoku":130,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"フレアソング","type":"ほのお","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"フレアドライブ","type":"ほのお","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":1,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ブレイククロー","type":"ノーマル","iryoku":75,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ブレイズキック","type":"ほのお","iryoku":85,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ブレイブバード","type":"ひこう","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":1,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ふんえん","type":"ほのお","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ふんか","type":"ほのお","iryoku":150,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ふんどのこぶし","type":"ゴースト","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ぶんまわす","type":"あく","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ヘドロウェーブ","type":"どく","iryoku":95,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ヘドロこうげき","type":"どく","iryoku":65,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ヘドロばくだん","type":"どく","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ベノムショック","type":"どく","iryoku":65,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":1},
    {"name":"ヘビーボンバー","type":"はがね","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ホイールスピン","type":"はがね","iryoku":100,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ポイズンテール","type":"どく","iryoku":50,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ほうでん","type":"でんき","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ぼうふう","type":"ひこう","iryoku":110,"meityu":70,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":2},
    {"name":"ボーンラッシュ","type":"じめん","iryoku":25,"meityu":90,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ほしがる","type":"ノーマル","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ほっぺすりすり","type":"でんき","iryoku":20,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ボディプレス","type":"かくとう","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":3},
    {"name":"ほのおのうず","type":"ほのお","iryoku":35,"meityu":85,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ほのおのキバ","type":"ほのお","iryoku":65,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":1,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ほのおのちかい","type":"ほのお","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ほのおのパンチ","type":"ほのお","iryoku":75,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ほのおのまい","type":"ほのお","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ほのおのムチ","type":"ほのお","iryoku":80,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ポルターガイスト","type":"ゴースト","iryoku":110,"meityu":90,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ボルテッカー","type":"でんき","iryoku":120,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":1,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ボルトチェンジ","type":"でんき","iryoku":70,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"まきつく","type":"ノーマル","iryoku":15,"meityu":90,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"マグマストーム","type":"ほのお","iryoku":100,"meityu":75,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"マジカルシャイン","type":"フェアリー","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"マジカルフレイム","type":"ほのお","iryoku":75,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"マジカルリーフ","type":"くさ","iryoku":60,"meityu":"必中","buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"マッドショット","type":"じめん","iryoku":55,"meityu":95,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"マッハパンチ","type":"かくとう","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"まとわりつく","type":"むし","iryoku":20,"meityu":100,"buturi":0,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ミサイルばり","type":"むし","iryoku":25,"meityu":95,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"みずしゅりけん","type":"みず","iryoku":15,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":1,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"みずでっぽう","type":"みず","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ミストバースト","type":"フェアリー","iryoku":100,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"みずのちかい","type":"みず","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"みずのはどう","type":"みず","iryoku":60,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"みだれづき","type":"ノーマル","iryoku":15,"meityu":85,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"みだれひっかき","type":"ノーマル","iryoku":18,"meityu":80,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"みねうち","type":"ノーマル","iryoku":40,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"みらいよち","type":"エスパー","iryoku":120,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ムーンフォース","type":"フェアリー","iryoku":95,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"むしくい","type":"むし","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"むしのさざめき","type":"むし","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"むしのていこう","type":"むし","iryoku":50,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"むねんのつるぎ","type":"ほのお","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"メガドレイン","type":"くさ","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"メガトンキック","type":"ノーマル","iryoku":120,"meityu":75,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"メガトンパンチ","type":"ノーマル","iryoku":80,"meityu":85,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"メガホーン","type":"むし","iryoku":120,"meityu":85,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"めざめるダンス","type":"ノーマル","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"メタルクロー","type":"はがね","iryoku":50,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"メテオビーム","type":"いわ","iryoku":120,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"もえあがるいかり","type":"あく","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"もえつきる","type":"ほのお","iryoku":130,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"もろはのずつき","type":"いわ","iryoku":150,"meityu":80,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":1,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"やきつくす","type":"ほのお","iryoku":60,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ゆきなだれ","type":"こおり","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ゆめくい","type":"エスパー","iryoku":100,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ようかいえき","type":"どく","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ようせいのかぜ","type":"フェアリー","iryoku":40,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":1,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ライジングボルト","type":"でんき","iryoku":70,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"らいめいげり","type":"かくとう","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ラスターカノン","type":"はがね","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"リーフストーム","type":"くさ","iryoku":130,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"リーフブレード","type":"くさ","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":1,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"りゅうせいぐん","type":"ドラゴン","iryoku":130,"meityu":90,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"りゅうのいぶき","type":"ドラゴン","iryoku":60,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"りゅうのはどう","type":"ドラゴン","iryoku":85,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"りんごさん","type":"くさ","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"りんしょう","type":"ノーマル","iryoku":60,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":1,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ルミナコリジョン","type":"エスパー","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"レイジングブル","type":"ノーマル","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":3},
    {"name":"れいとうパンチ","type":"こおり","iryoku":75,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":1,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"れいとうビーム","type":"こおり","iryoku":90,"meityu":100,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"れんごく","type":"ほのお","iryoku":100,"meityu":50,"buturi":0,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"れんぞくぎり","type":"むし","iryoku":40,"meityu":95,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":1,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ローキック","type":"かくとう","iryoku":65,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ロックブラスト","type":"いわ","iryoku":25,"meityu":90,"buturi":1,"tyokusetu":0,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":25,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":1,"tikarazuku":0,"iryokuhenka":0},
    {"name":"ワイドフォース","type":"エスパー","iryoku":80,"meityu":100,"buturi":0,"tyokusetu":0,"hani":2,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":1},
    {"name":"ワイドブレイカー","type":"ドラゴン","iryoku":60,"meityu":100,"buturi":1,"tyokusetu":1,"hani":1,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":1,"iryokuhenka":0},
    {"name":"ワイルドボルト","type":"でんき","iryoku":90,"meityu":100,"buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":1,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0},
    {"name":"わるあがき","type":"ノーマル","iryoku":50,"meityu":"必中","buturi":1,"tyokusetu":1,"hani":0,"sensei":0,"kyuusyo":0,"renzoku":0,"punch":0,"oto":0,"kaze":0,"zangeki":0,"sutemi":0,"kamituki":0,"bakuhatu":0,"tikarazuku":0,"iryokuhenka":0}
  ],

  "ability_a1": [
    {
      "name": "アナライズ",
      "explanation": "(+行動順が最後) [威力1.3倍]",
      "check": 1
    },
    {
      "name": "あまのじゃく",
      "explanation": "[能力ランクの変化が逆になる]",
      "check": 0
    },
    {
      "name": "あめふらし",
      "explanation": "[戦闘に出ると雨が降る]",
      "check": 0
    },
    {
      "name": "いかりのつぼ",
      "explanation": "(+急所被弾) [攻撃ランクが最大まで上がる]",
      "check": 1
    },
    {
      "name": "いろめがね",
      "explanation": "[効果がいまひとつの攻撃技 威力2倍]",
      "check": 1
    },
    {
      "name": "いわはこび",
      "explanation": "[岩技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "うるおいボイス",
      "explanation": "[音技→水タイプ化]",
      "check": 1
    },
    {
      "name": "エレキスキン",
      "explanation": "[ノーマル技→電気タイプ化＆威力1.2倍]",
      "check": 1
    },
    {
      "name": "エレキメイカー",
      "explanation": "[戦闘に出るとエレキフィールドにする]",
      "check": 0
    },
    {
      "name": "えんかく",
      "explanation": "[直接攻撃技→非接触技化]",
      "check": 0
    },
    {
      "name": "かいりきバサミ",
      "explanation": "[相手の技や特性で攻撃ランクが下がらない]",
      "check": 0
    },
    {
      "name": "かたいツメ",
      "explanation": "[直接攻撃技 威力 1.3倍]",
      "check": 1
    },
    {
      "name": "かたやぶり",
      "explanation": "[相手の特性の影響を受けずに攻撃できる]",
      "check": 0
    },
    {
      "name": "かちき",
      "explanation": "(能力ランク下降時) [特攻ランク 2段階上昇]",
      "check": 0
    },
    {
      "name": "がんじょうあご",
      "explanation": "[かみつき技 威力 1.3倍]",
      "check": 1
    },
    {
      "name": "きもったま",
      "explanation": "[ゴーストにもノーマル・格闘技が命中, いかく無効]",
      "check": 0
    },
    {
      "name": "きょううん",
      "explanation": "[急所ランク+1]",
      "check": 0
    },
    {
      "name": "きれあじ",
      "explanation": "[斬撃技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "クォークチャージ",
      "explanation": "(+発動時) [最も高い能力 1.3倍]",
      "check": 1
    },
    {
      "name": "グラスメイカー",
      "explanation": "[戦闘に出るとグラスフィールドにする]",
      "check": 0
    },
    {
      "name": "クリアボディ",
      "explanation": "[相手の技や特性によって能力ランクが下がらない]",
      "check": 0
    },
    {
      "name": "げきりゅう",
      "explanation": "(+自分のHPが1/3以下) [水技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "こだいかっせい",
      "explanation": "(+発動時) [最も高い能力 1.3倍]",
      "check": 1
    },
    {
      "name": "ごりむちゅう",
      "explanation": "[物理技 威力1.5倍]",
      "check": 0
    },
    {
      "name": "こんじょう",
      "explanation": "(+自分が状態異常) [攻撃1.5倍]",
      "check": 1
    },
    {
      "name": "サイコメイカー",
      "explanation": "[戦闘に出るとサイコフィールドにする]",
      "check": 0
    },
    {
      "name": "サンパワー",
      "explanation": "(+晴れ) [特攻1.5倍]",
      "check": 1
    },
    {
      "name": "じゅくせい",
      "explanation": "[きのみの効果が2倍になる]",
      "check": 0
    },
    {
      "name": "しろいけむり",
      "explanation": "[相手の技や特性によって能力ランクが下がらない]",
      "check": 0
    },
    {
      "name": "しんりょく",
      "explanation": "(+自分のHPが1/3以下) [草技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "すいほう",
      "explanation": "[水技 威力2倍]",
      "check": 1
    },
    {
      "name": "スカイスキン",
      "explanation": "[ノーマル技→飛行タイプ化＆威力1.2倍]",
      "check": 1
    },
    {
      "name": "スキルリンク",
      "explanation": "[連続技が5回あたる]",
      "check": 1
    },
    {
      "name": "すてみ",
      "explanation": "[すてみ技 威力1.2倍]",
      "check": 1
    },
    {
      "name": "スナイパー",
      "explanation": "[急所補正 1.5倍→2.25倍]",
      "check": 0
    },
    {
      "name": "すなおこし",
      "explanation": "[戦闘に出ると砂嵐が吹く]",
      "check": 0
    },
    {
      "name": "すなのちから",
      "explanation": "(+砂嵐) [地面技,岩技,鋼技 威力1.3倍]",
      "check": 1
    },
    {
      "name": "すりぬけ",
      "explanation": "[リフレクター/ひかりのかべの影響を受けない]",
      "check": 0
    },
    {
      "name": "するどいめ",
      "explanation": "[相手の回避ランクの影響を受けない]",
      "check": 0
    },
    {
      "name": "スロースタート",
      "explanation": "[攻撃・素早さが半分になる]",
      "check": 1
    },
    {
      "name": "せいしんりょく",
      "explanation": "[いかく無効]",
      "check": 0
    },
    {
      "name": "そうだいしょう",
      "explanation": "[瀕死なった味方1体につき 10% 威力上昇]",
      "check": 2
    },
    {
      "name": "ちからずく",
      "explanation": "[追加効果のある技 威力1.3倍]",
      "check": 1
    },
    {
      "name": "ちからもち",
      "explanation": "[攻撃2倍]",
      "check": 0
    },
    {
      "name": "てきおうりょく",
      "explanation": "[一致技ダメージ補正1.5倍→2倍]",
      "check": 1
    },
    {
      "name": "テクニシャン",
      "explanation": "[威力60以下の技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "てつのこぶし",
      "explanation": "[パンチ技 威力1.2倍]",
      "check": 1
    },
    {
      "name": "てんねん",
      "explanation": "[相手の能力ランクの変化の影響を受けない]",
      "check": 0
    },
    {
      "name": "とうそうしん",
      "explanation": "(+異性/同性) [攻撃・特攻 1.25倍/0.75倍]",
      "check": 1
    },
    {
      "name": "どくぼうそう",
      "explanation": "(+自分が毒) [物理技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "トランジスタ",
      "explanation": "[電気技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "どんかん",
      "explanation": "[いかく無効]",
      "check": 0
    },
    {
      "name": "ねつぼうそう",
      "explanation": "(+自分が火傷) [特殊技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "ノーガード",
      "explanation": "[お互いに技が必ず命中する]",
      "check": 0
    },
    {
      "name": "ノーてんき",
      "explanation": "[天気の影響がなくなる]",
      "check": 0
    },
    {
      "name": "ノーマルスキン",
      "explanation": "[全ての技→ノーマルタイプ化＆威力1.2倍]",
      "check": 0
    },
    {
      "name": "はがねつかい",
      "explanation": "[鋼技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "はがねのせいしん",
      "explanation": "[鋼技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "ハドロンエンジン",
      "explanation": "[戦闘に出るとエレキフィールドにする, 特攻4/3倍]",
      "check": 1
    },
    {
      "name": "はりきり",
      "explanation": "[攻撃1.5倍],[物理技 命中率0.8倍]",
      "check": 0
    },
    {
      "name": "はりこみ",
      "explanation": "(+相手が交代時) [威力2倍]",
      "check": 1
    },
    {
      "name": "パンクロック",
      "explanation": "[音技 威力1.3倍]",
      "check": 1
    },
    {
      "name": "ばんけん",
      "explanation": "[いかくされると攻撃ランク1段階上昇]",
      "check": 0
    },
    {
      "name": "ひでり",
      "explanation": "[戦闘に出ると晴れる]",
      "check": 0
    },
    {
      "name": "ひとでなし",
      "explanation": "(相手が毒) [攻撃が必ず急所にあたる]",
      "check": 1
    },
    {
      "name": "ひひいろのこどう",
      "explanation": "[戦闘に出ると晴れる, 攻撃4/3倍]",
      "check": 1
    },
    {
      "name": "フェアリースキン",
      "explanation": "[ノーマル技→フェアリータイプ化＆威力1.2倍]",
      "check": 0
    },
    {
      "name": "ふくがん",
      "explanation": "[命中率1.3倍]",
      "check": 0
    },
    {
      "name": "プラス",
      "explanation": "(+他にプラスかマイナスがいる) [特攻1.5倍]",
      "check": 0
    },
    {
      "name": "フラワーギフト",
      "explanation": "(+晴れ) [攻撃1.5倍]",
      "check": 1
    },
    {
      "name": "フリーズスキン",
      "explanation": "[ノーマル技→氷タイプ化＆威力1.2倍]",
      "check": 1
    },
    {
      "name": "へんげんじざい",
      "explanation": "[行動時に技と同じタイプになる]",
      "check": 1
    },
    {
      "name": "マイナス",
      "explanation": "(+他にプラスかマイナスがいる) [特攻1.5倍]",
      "check": 1
    },
    {
      "name": "マイペース",
      "explanation": "[いかく無効]",
      "check": 0
    },
    {
      "name": "まけんき",
      "explanation": "(能力ランク下降時) [攻撃ランクが2段階上昇する]",
      "check": 0
    },
    {
      "name": "ミストメイカー",
      "explanation": "[戦闘に出るとミストフィールドにする]",
      "check": 0
    },
    {
      "name": "ミラーアーマー",
      "explanation": "[技や特性の能力ランクを下げる効果を反射する]",
      "check": 0
    },
    {
      "name": "むしのしらせ",
      "explanation": "(+自分のHPが1/3以下) [虫技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "メガランチャー",
      "explanation": "[波動技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "もうか",
      "explanation": "(+自分のHPが1/3以下) [炎技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "もらいび",
      "explanation": "(+炎技を受けた後) [炎技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "ゆきふらし",
      "explanation": "[戦闘に出ると雪が降る]",
      "check": 0
    },
    {
      "name": "ヨガパワー",
      "explanation": "[攻撃2倍]",
      "check": 0
    },
    {
      "name": "りゅうのあぎと",
      "explanation": "[ドラゴン技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "わざわいのたま",
      "explanation": "[自分以外の特防 3/4倍]",
      "check": 0
    },
    {
      "name": "わざわいのつるぎ",
      "explanation": "[自分以外の防御 3/4倍]",
      "check": 0
    }
  ],
  "ability_a2": [
    {
      "name": "フラワーギフト",
      "explanation": "(+晴れ) [攻撃1.5倍]",
      "check": 1
    },
    {
      "name": "はがねのせいしん",
      "explanation": "[鋼技 威力1.5倍]",
      "check": 1
    },
    {
      "name": "パワースポット",
      "explanation": "[味方の技 威力1.3倍]",
      "check": 0
    },
    {
      "name": "わざわいのたま",
      "explanation": "[自分以外の特防 3/4倍]",
      "check": 0
    },
    {
      "name": "わざわいのつるぎ",
      "explanation": "[自分以外の防御 3/4倍]",
      "check": 0
    },
    {
      "name": "エレキメイカー",
      "explanation": "[戦闘に出るとエレキフィールドにする]",
      "check": 0
    },
    {
      "name": "サイコメイカー",
      "explanation": "[戦闘に出るとサイコフィールドにする]",
      "check": 0
    },
    {
      "name": "グラスメイカー",
      "explanation": "[戦闘に出るとグラスフィールドにする]",
      "check": 0
    },
    {
      "name": "ミストメイカー",
      "explanation": "[戦闘に出るとミストフィールドにする]",
      "check": 0
    },
    {
      "name": "ひでり",
      "explanation": "[戦闘に出ると晴れる]",
      "check": 0
    },
    {
      "name": "あめふらし",
      "explanation": "[戦闘に出ると雨が降る]",
      "check": 0
    },
    {
      "name": "すなおこし",
      "explanation": "[戦闘に出ると砂嵐が吹く]",
      "check": 0
    },
    {
      "name": "ゆきふらし",
      "explanation": "[戦闘に出ると雪が降る]",
      "check": 0
    },
    {
      "name": "ノーてんき",
      "explanation": "[天気の影響がなくなる]",
      "check": 0
    }
  ],
  "ability_b1": [
    {
      "name": "あついしぼう",
      "explanation": "[炎技,氷技 ダメージ1/2倍]",
      "check": 0
    },
    {
      "name": "あめふらし",
      "explanation": "[戦闘に出ると雨が降る]",
      "check": 0
    },
    {
      "name": "いかく",
      "explanation": "[戦闘に出ると相手の攻撃ランクを1段階下げる]",
      "check": 0
    },
    {
      "name": "エレキメイカー",
      "explanation": "[戦闘に出るとエレキフィールドにする]",
      "check": 0
    },
    {
      "name": "かぜのり",
      "explanation": "[風技 無効]",
      "check": 0
    },
    {
      "name": "カブトアーマー",
      "explanation": "[自分への攻撃が急所にあたらない]",
      "check": 0
    },
    {
      "name": "かんそうはだ",
      "explanation": "[炎技 ダメージ1.25倍,水技 無効]",
      "check": 0
    },
    {
      "name": "きよめのしお",
      "explanation": "[ゴースト技 ダメージ1/2倍]",
      "check": 0
    },
    {
      "name": "くさのけがわ",
      "explanation": "(+グラスフィールド) [防御1.5倍]",
      "check": 1
    },
    {
      "name": "クォークチャージ",
      "explanation": "(+発動時) [最も高い能力 1.3倍]",
      "check": 1
    },
    {
      "name": "グラスメイカー",
      "explanation": "[戦闘に出るとグラスフィールドにする]",
      "check": 0
    },
    {
      "name": "こおりのりんぷん",
      "explanation": "[特殊技 ダメージ1/2倍]",
      "check": 0
    },
    {
      "name": "こだいかっせい",
      "explanation": "(+発動時) [最も高い能力1.3倍]",
      "check": 1
    },
    {
      "name": "こんがりボディ",
      "explanation": "[炎技 無効]",
      "check": 0
    },
    {
      "name": "サイコメイカー",
      "explanation": "[戦闘に出るとサイコフィールドにする]",
      "check": 0
    },
    {
      "name": "シェルアーマー",
      "explanation": "[自分への攻撃が急所にあたらない]",
      "check": 0
    },
    {
      "name": "じゅくせい",
      "explanation": "[きのみの効果が2倍になる]",
      "check": 0
    },
    {
      "name": "じょおうのいげん",
      "explanation": "[先制技 無効]",
      "check": 0
    },
    {
      "name": "すいほう",
      "explanation": "[炎技 ダメージ1/2倍]",
      "check": 0
    },
    {
      "name": "すなおこし",
      "explanation": "[戦闘に出ると砂嵐が吹く]",
      "check": 0
    },
    {
      "name": "すながくれ",
      "explanation": "(+砂嵐) [相手の命中率 0.8倍]",
      "check": 1
    },
    {
      "name": "そうしょく",
      "explanation": "[草技 無効]",
      "check": 0
    },
    {
      "name": "たいねつ",
      "explanation": "[炎技 ダメージ1/2倍]",
      "check": 0
    },
    {
      "name": "ちくでん",
      "explanation": "[電気技 無効]",
      "check": 0
    },
    {
      "name": "ちどりあし",
      "explanation": "[+混乱] [相手の命中率 0.8倍]",
      "check": 1
    },
    {
      "name": "ちょすい",
      "explanation": "[水技 無効]",
      "check": 0
    },
    {
      "name": "テイルアーマー",
      "explanation": "[先制技 無効]",
      "check": 0
    },
    {
      "name": "でんきエンジン",
      "explanation": "[電気技 無効]",
      "check": 0
    },
    {
      "name": "てんねん",
      "explanation": "[相手の能力ランクの変化の影響を受けない]",
      "check": 0
    },
    {
      "name": "どしょく",
      "explanation": "[地面技 無効]",
      "check": 0
    },
    {
      "name": "ノーガード",
      "explanation": "[お互いに技が必ず命中する]",
      "check": 0
    },
    {
      "name": "ノーてんき",
      "explanation": "[天気の影響がなくなる]",
      "check": 0
    },
    {
      "name": "ハードロック",
      "explanation": "[弱点技 ダメージ3/4倍]",
      "check": 0
    },
    {
      "name": "ハドロンエンジン",
      "explanation": "[戦闘に出るとエレキフィールドにする]",
      "check": 0
    },
    {
      "name": "パンクロック",
      "explanation": "[音技 ダメージ1/2倍]",
      "check": 0
    },
    {
      "name": "ひでり",
      "explanation": "[戦闘に出ると晴れる]",
      "check": 0
    },
    {
      "name": "ひひいろのこどう",
      "explanation": "[戦闘に出ると晴れる]",
      "check": 0
    },
    {
      "name": "ビビッドボディ",
      "explanation": "[先制技 無効]",
      "check": 0
    },
    {
      "name": "ひらいしん",
      "explanation": "[電気技 無効]",
      "check": 0
    },
    {
      "name": "ファーコート",
      "explanation": "[物理技 ダメージ1/2倍]",
      "check": 0
    },
    {
      "name": "フィルター",
      "explanation": "[弱点技 ダメージ3/4倍]",
      "check": 1
    },
    {
      "name": "ふしぎなうろこ",
      "explanation": "(＋自分が状態異常) [防御1.5倍]",
      "check": 1
    },
    {
      "name": "ふゆう",
      "explanation": "[地面技 無効]",
      "check": 0
    },
    {
      "name": "フラワーギフト",
      "explanation": "(+晴れ) [特防1.5倍]",
      "check": 1
    },
    {
      "name": "ヘヴィメタル",
      "explanation": "自分の重さが2倍になる",
      "check": 0
    },
    {
      "name": "ぼうおん",
      "explanation": "[音技 無効]",
      "check": 0
    },
    {
      "name": "ぼうだん",
      "explanation": "[球技 無効]",
      "check": 0
    },
    {
      "name": "ほおぶくろ",
      "explanation": "[きのみを食べるとき追加で1/3回復する]",
      "check": 0
    },
    {
      "name": "マルチスケイル",
      "explanation": "(HP最大のとき) [ダメージ1/2倍]",
      "check": 1
    },
    {
      "name": "ミストメイカー",
      "explanation": "[戦闘に出るとミストフィールドにする]",
      "check": 0
    },
    {
      "name": "もふもふ",
      "explanation": "[直接攻撃技 ダメージ1/2倍,炎技 ダメージ2倍]",
      "check": 1
    },
    {
      "name": "もらいび",
      "explanation": "[炎技 無効]",
      "check": 0
    },
    {
      "name": "ゆきがくれ",
      "explanation": "(+雪のとき) [相手の命中率 0.8倍]",
      "check": 1
    },
    {
      "name": "ゆきふらし",
      "explanation": "[戦闘に出ると雪が降る]",
      "check": 0
    },
    {
      "name": "よびみず",
      "explanation": "[水技 無効]",
      "check": 0
    },
    {
      "name": "ライトメタル",
      "explanation": "[自分の重さが半分になる]",
      "check": 0
    },
    {
      "name": "わざわいのうつわ",
      "explanation": "[自分以外の特攻 3/4倍]",
      "check": 0
    },
    {
      "name": "わざわいのおふだ",
      "explanation": "[自分以外の攻撃 3/4倍]",
      "check": 0
    }
  ],
  "ability_b2": [
    {
      "name": "フラワーギフト",
      "explanation": "(+晴れのとき) [特防1.5倍]",
      "check": 1
    },
    {
      "name": "フレンドガード",
      "explanation": "[味方が受ける技 ダメージ3/4倍]",
      "check": 0
    },
    {
      "name": "ビビッドボディ",
      "explanation": "[先制技 無効]",
      "check": 0
    },
    {
      "name": "じょおうのいげん",
      "explanation": "[先制技 無効]",
      "check": 0
    },
    {
      "name": "テイルアーマー",
      "explanation": "[先制技 無効]",
      "check": 0
    },
    {
      "name": "ひらいしん",
      "explanation": "[電気技 無効]",
      "check": 0
    },
    {
      "name": "よびみず",
      "explanation": "[水技技 無効]",
      "check": 0
    },
    {
      "name": "わざわいのうつわ",
      "explanation": "[自分以外の特攻 3/4倍]",
      "check": 0
    },
    {
      "name": "わざわいのおふだ",
      "explanation": "[自分以外の攻撃 3/4倍]",
      "check": 0
    },
    {
      "name": "エレキメイカー",
      "explanation": "[戦闘に出るとエレキフィールドにする]",
      "check": 0
    },
    {
      "name": "サイコメイカー",
      "explanation": "[戦闘に出るとサイコフィールドにする]",
      "check": 0
    },
    {
      "name": "グラスメイカー",
      "explanation": "[戦闘に出るとグラスフィールドにする]",
      "check": 0
    },
    {
      "name": "ミストメイカー",
      "explanation": "[戦闘に出るとミストフィールドにする]",
      "check": 0
    },
    {
      "name": "ひでり",
      "explanation": "[戦闘に出ると晴れる]",
      "check": 0
    },
    {
      "name": "あめふらし",
      "explanation": "[戦闘に出ると雨が降る]",
      "check": 0
    },
    {
      "name": "すなおこし",
      "explanation": "[戦闘に出ると砂嵐が吹く]",
      "check": 0
    },
    {
      "name": "ゆきふらし",
      "explanation": "[戦闘に出ると雪が降る]",
      "check": 0
    },
    {
      "name": "ノーてんき",
      "explanation": "[天気の影響がなくなる]",
      "check": 0
    }
  ],
  "item_a1": [
    {
      "name": "タイプ強化アイテム",
      "explanation": "[対象タイプの技 威力1.2倍]",
      "check": 1
    },
    {
      "name": "いのちのたま",
      "explanation": "[威力1.3倍]",
      "check": 0
    },
    {
      "name": "こだわりハチマキ",
      "explanation": "[物理技 威力1.5倍]",
      "check": 0
    },
    {
      "name": "こだわりメガネ",
      "explanation": "[特殊技 威力1.5倍]",
      "check": 0
    },
    {
      "name": "たつじんのおび",
      "explanation": "[弱点技 威力1.2倍]",
      "check": 1
    },
    {
      "name": "パンチグローブ",
      "explanation": "[パンチ技 非接触技化＆威力1.1倍]",
      "check": 1
    },
    {
      "name": "ちからのハチマキ",
      "explanation": "[物理技 威力1.1倍]",
      "check": 0
    },
    {
      "name": "ものしりメガネ",
      "explanation": "[特殊技 威力1.1倍]",
      "check": 0
    },
    {
      "name": "いかさまダイス",
      "explanation": "[連続技 4回以上命中率]",
      "check": 0
    },
    {
      "name": "ピントレンズ",
      "explanation": "[急所率1.1倍]",
      "check": 0
    },
    {
      "name": "クリアチャーム",
      "explanation": "[相手の技や特性によって能力ランクが下がらない]",
      "check": 0
    },
    {
      "name": "ノーマルジュエル",
      "explanation": "[ノーマル技 威力1.3倍]",
      "check": 0
    },
    {
      "name": "こうかくレンズ",
      "explanation": "[命中率 1.1倍]",
      "check": 0
    },
    {
      "name": "フォーカスレンズ",
      "explanation": "(+後攻のとき) [命中率 1.2倍]",
      "check": 1
    },
    {
      "name": "ブーストエナジー",
      "explanation": "[こだいかっせい/クォークチャージ 発動]",
      "check": 0
    },
    {
      "name": "でんきだま",
      "explanation": "(ピカチュウのみ) [威力 2倍]",
      "check": 0
    }
  ],
  "item_b1": [
    {
      "name": "タイプ半減きのみ",
      "explanation": "[弱点技 ダメージ1/2倍]",
      "check": 1
    },
    {
      "name": "とつげきチョッキ",
      "explanation": "[特防 1.5倍]",
      "check": 0
    },
    {
      "name": "しんかのきせき",
      "explanation": "(+進化前ポケモン) [防御/特防 1.5倍]",
      "check": 1
    },
    {
      "name": "ひかりのこな",
      "explanation": "[相手の命中率 0.9倍]",
      "check": 0
    },
    {
      "name": "ブーストエナジー",
      "explanation": "[こだいかっせい/クォークチャージ 発動]",
      "check": 0
    },
    {
      "name": "くろいてっきゅう",
      "explanation": "[地面技が無効化できない]",
      "check": 0
    }
  ],
  "type_list": [
    {
      "type": "ノーマル",
      "colour": "A8A878",
      "compatibility": {
        "ノーマル": 1,
        "ほのお": 1,
        "みず": 1,
        "でんき": 1,
        "くさ": 1,
        "こおり": 1,
        "かくとう": 1,
        "どく": 1,
        "じめん": 1,
        "ひこう": 1,
        "エスパー": 1,
        "むし": 1,
        "いわ": 0.5,
        "ゴースト": 0,
        "ドラゴン": 1,
        "あく": 1,
        "はがね": 0.5,
        "フェアリー": 1
      }
    },
    {
      "type": "ほのお",
      "colour": "F08030",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 0.5,
          "みず": 0.5,
          "でんき": 1,
          "くさ": 2,
          "こおり": 2,
          "かくとう": 1,
          "どく": 1,
          "じめん": 1,
          "ひこう": 1,
          "エスパー": 1,
          "むし": 2,
          "いわ": 0.5,
          "ゴースト": 1,
          "ドラゴン": 0.5,
          "あく": 1,
          "はがね": 2,
          "フェアリー": 1
        }
      ]
    },
    {
      "type": "みず",
      "colour": "6890F0",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 2,
          "みず": 0.5,
          "でんき": 1,
          "くさ": 0.5,
          "こおり": 1,
          "かくとう": 1,
          "どく": 1,
          "じめん": 2,
          "ひこう": 1,
          "エスパー": 1,
          "むし": 1,
          "いわ": 2,
          "ゴースト": 1,
          "ドラゴン": 0.5,
          "あく": 1,
          "はがね": 1,
          "フェアリー": 1
        }
      ]
    },
    {
      "type": "でんき",
      "colour": "F8D030",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 1,
          "みず": 2,
          "でんき": 0.5,
          "くさ": 0.5,
          "こおり": 1,
          "かくとう": 1,
          "どく": 1,
          "じめん": 0,
          "ひこう": 2,
          "エスパー": 1,
          "むし": 1,
          "いわ": 1,
          "ゴースト": 1,
          "ドラゴン": 0.5,
          "あく": 1,
          "はがね": 1,
          "フェアリー": 1
        }
      ]
    },
    {
      "type": "くさ",
      "colour": "78C850",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 0.5,
          "みず": 2,
          "でんき": 1,
          "くさ": 0.5,
          "こおり": 1,
          "かくとう": 1,
          "どく": 0.5,
          "じめん": 2,
          "ひこう": 0.5,
          "エスパー": 1,
          "むし": 0.5,
          "いわ": 2,
          "ゴースト": 1,
          "ドラゴン": 0.5,
          "あく": 1,
          "はがね": 0.5,
          "フェアリー": 1
        }
      ]
    },
    {
      "type": "こおり",
      "colour": "98D8D8",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 0.5,
          "みず": 0.5,
          "でんき": 1,
          "くさ": 2,
          "こおり": 0.5,
          "かくとう": 1,
          "どく": 1,
          "じめん": 2,
          "ひこう": 2,
          "エスパー": 1,
          "むし": 1,
          "いわ": 1,
          "ゴースト": 1,
          "ドラゴン": 2,
          "あく": 1,
          "はがね": 0.5,
          "フェアリー": 1
        }
      ]
    },
    {
      "type": "かくとう",
      "colour": "C03028",
      "compatibility": [
        {
          "ノーマル": 2,
          "ほのお": 1,
          "みず": 1,
          "でんき": 1,
          "くさ": 1,
          "こおり": 2,
          "かくとう": 1,
          "どく": 0.5,
          "じめん": 1,
          "ひこう": 0.5,
          "エスパー": 0.5,
          "むし": 0.5,
          "いわ": 2,
          "ゴースト": 0,
          "ドラゴン": 1,
          "あく": 2,
          "はがね": 2,
          "フェアリー": 0.5
        }
      ]
    },
    {
      "type": "どく",
      "colour": "A040A0",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 1,
          "みず": 1,
          "でんき": 1,
          "くさ": 2,
          "こおり": 1,
          "かくとう": 1,
          "どく": 0.5,
          "じめん": 0.5,
          "ひこう": 1,
          "エスパー": 1,
          "むし": 1,
          "いわ": 0.5,
          "ゴースト": 0.5,
          "ドラゴン": 1,
          "あく": 1,
          "はがね": 0,
          "フェアリー": 2
        }
      ]
    },
    {
      "type": "じめん",
      "colour": "E0C068",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 2,
          "みず": 1,
          "でんき": 2,
          "くさ": 0.5,
          "こおり": 1,
          "かくとう": 1,
          "どく": 2,
          "じめん": 1,
          "ひこう": 0,
          "エスパー": 1,
          "むし": 0.5,
          "いわ": 2,
          "ゴースト": 1,
          "ドラゴン": 1,
          "あく": 1,
          "はがね": 2,
          "フェアリー": 1
        }
      ]
    },
    {
      "type": "ひこう",
      "colour": "A890F0",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 1,
          "みず": 1,
          "でんき": 0.5,
          "くさ": 2,
          "こおり": 1,
          "かくとう": 2,
          "どく": 1,
          "じめん": 1,
          "ひこう": 1,
          "エスパー": 1,
          "むし": 2,
          "いわ": 0.5,
          "ゴースト": 1,
          "ドラゴン": 1,
          "あく": 1,
          "はがね": 0.5,
          "フェアリー": 1
        }
      ]
    },
    {
      "type": "エスパー",
      "colour": "F85888",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 1,
          "みず": 1,
          "でんき": 1,
          "くさ": 1,
          "こおり": 1,
          "かくとう": 2,
          "どく": 2,
          "じめん": 1,
          "ひこう": 1,
          "エスパー": 0.5,
          "むし": 1,
          "いわ": 1,
          "ゴースト": 1,
          "ドラゴン": 1,
          "あく": 0,
          "はがね": 0.5,
          "フェアリー": 1
        }
      ]
    },
    {
      "type": "むし",
      "colour": "A8B820",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 0.5,
          "みず": 1,
          "でんき": 1,
          "くさ": 2,
          "こおり": 1,
          "かくとう": 0.5,
          "どく": 0.5,
          "じめん": 1,
          "ひこう": 0.5,
          "エスパー": 2,
          "むし": 1,
          "いわ": 1,
          "ゴースト": 0.5,
          "ドラゴン": 1,
          "あく": 2,
          "はがね": 0.5,
          "フェアリー": 0.5
        }
      ]
    },
    {
      "type": "いわ",
      "colour": "B8A038",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 2,
          "みず": 1,
          "でんき": 1,
          "くさ": 1,
          "こおり": 2,
          "かくとう": 0.5,
          "どく": 1,
          "じめん": 0.5,
          "ひこう": 2,
          "エスパー": 1,
          "むし": 2,
          "いわ": 1,
          "ゴースト": 1,
          "ドラゴン": 1,
          "あく": 1,
          "はがね": 0.5,
          "フェアリー": 1
        }
      ]
    },
    {
      "type": "ゴースト",
      "colour": "705898",
      "compatibility": [
        {
          "ノーマル": 0,
          "ほのお": 1,
          "みず": 1,
          "でんき": 1,
          "くさ": 1,
          "こおり": 1,
          "かくとう": 1,
          "どく": 1,
          "じめん": 1,
          "ひこう": 1,
          "エスパー": 2,
          "むし": 1,
          "いわ": 1,
          "ゴースト": 2,
          "ドラゴン": 1,
          "あく": 0.5,
          "はがね": 1,
          "フェアリー": 1
        }
      ]
    },
    {
      "type": "ドラゴン",
      "colour": "7038F8",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 1,
          "みず": 1,
          "でんき": 1,
          "くさ": 1,
          "こおり": 1,
          "かくとう": 1,
          "どく": 1,
          "じめん": 1,
          "ひこう": 1,
          "エスパー": 1,
          "むし": 1,
          "いわ": 1,
          "ゴースト": 1,
          "ドラゴン": 2,
          "あく": 1,
          "はがね": 0.5,
          "フェアリー": 0
        }
      ]
    },
    {
      "type": "あく",
      "colour": "705848",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 1,
          "みず": 1,
          "でんき": 1,
          "くさ": 1,
          "こおり": 1,
          "かくとう": 0.5,
          "どく": 1,
          "じめん": 1,
          "ひこう": 1,
          "エスパー": 2,
          "むし": 1,
          "いわ": 1,
          "ゴースト": 2,
          "ドラゴン": 1,
          "あく": 0.5,
          "はがね": 1,
          "フェアリー": 0.5
        }
      ]
    },
    {
      "type": "はがね",
      "colour": "B8B8D0",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 0.5,
          "みず": 0.5,
          "でんき": 0.5,
          "くさ": 1,
          "こおり": 2,
          "かくとう": 1,
          "どく": 1,
          "じめん": 1,
          "ひこう": 1,
          "エスパー": 1,
          "むし": 1,
          "いわ": 2,
          "ゴースト": 1,
          "ドラゴン": 1,
          "あく": 1,
          "はがね": 0.5,
          "フェアリー": 2
        }
      ]
    },
    {
      "type": "フェアリー",
      "colour": "EE99AC",
      "compatibility": [
        {
          "ノーマル": 1,
          "ほのお": 0.5,
          "みず": 1,
          "でんき": 1,
          "くさ": 1,
          "こおり": 1,
          "かくとう": 2,
          "どく": 0.5,
          "じめん": 1,
          "ひこう": 1,
          "エスパー": 1,
          "むし": 1,
          "いわ": 1,
          "ゴースト": 1,
          "ドラゴン": 2,
          "あく": 2,
          "はがね": 0.5,
          "フェアリー": 1
        }
      ]
    }
  ]
}
