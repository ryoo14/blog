---
title: Monthly Report Mar 2024
publish_date: 2024-03-31
tags: [monthly_report]
---

2024年3月の生存報告。漫画の新巻が次々出てお金めっちゃ使った。

## 📚 学んだこととかやったこと

### [Linuxのしくみ](https://amzn.to/49bdRub)

4章メモリ管理まで読んだ。Linuxの中身や仕組みを読み物として読むのはおもしろい。  
動作確認スクリプトを全然動かせてないのでどこかのタイミングで写経しながら動かしたい。

<br />

### [AtCoder ProblemのTraining埋め](https://kenkoooo.com/atcoder/#/training/Boot%20camp%20for%20Beginners)

何もやってない。

<br />

### [テック系ニュースのPodcast化](https://github.com/ryoo14/silver_harp)

3月になってからはリファクタリングばっかりやってる。Github Actionのcronは複数行書けることを知ったのでしっかり狙い通りのスケジュールで動かせるようになった。

TTS側が一回のリクエストの文字数制限を設けているらしく、大体2000文字くらいでエラーになるので、とりあえず1500文字毎にテキストを分割して音声化してたんだけど、そうするとテキストとテキストの境目に不自然な沈黙が挿入される。  
句読点で分割すると自然な間隔になるので、1500文字を超えないように句読点を仕切りとしてテキストを分割する処理を書いた。

ffmpegで設定できるchapterのタイトルの長さが128バイトまでという知見を得た。計算するの面倒なのでタイトルは20文字くらいでぶち切ることにした。

<br />

## 🧐 おもしろそうだったこと

### [Quarkeys Z40](https://www.quarkeys.com/product-page/z40-case-extras-sale)

[Lofree Ghost Linear Switch](https://amzn.to/3Il0Xyt)で組んだ。Hotswap対応でないので全スイッチ半田付け。  
最初どう組み立てたらいいか全然わからなかったけど、とりあえず適当にやったら組めた。めちゃくちゃ良い打鍵感。。。これはZ40のおかげなのかGhostのおかげなのか。

ロープロファイルだから尊師スタイルで使っても今の所手首疲れないし、外に持ち出すキーボードはこれに決まった。  
購入先着15名にXDAキーキャップがプレゼントされたが、手持ちのXDAキーキャップと比較すると若干背が低く、違うのでは？という気持ちになっている。  
2Uの黒ブランクキーキャップを追加で購入してしばらく使っていて、とてもよかったけど、無刻印キーボードを作りたくなったのでXDAのブランクキーキャップを追加で注文した。

<br />

### [F10 (flat keys)](https://spkeyboards.com/products/sp-f10-flat-keys?_pos=7&_sid=e19260b1a&_ss=r)

まったいらでシンプルなキーキャップ。死ぬほど高い。

Z40をさらにシンプルにするために買ってみた。結果的にはGhost Switchにはゆるすぎ、ロープロファイルとの相性があんまりよくなさそうだった。  
遊舎工房で買ったうち10個くらいがLEDの透過具合とかそもそもの形状が全然違ったので問い合わせたら、ロット違いによる品質差異だろうとのことで全て交換することになった。到着まで1ヶ月以上かかるらしく、割と萎えた。品質チェックはちゃんとやってほしい。  
最終的に返品して返金してもらうことになった。遊舎工房はできるだけ使わない方向に決めた。

<br />

### [XDAブランクキーキャップ](https://talpkeyboard.net/?category_id=6172634372eb467371ec96f9)

F10がダメになったので代わりのシンプルなキーキャップを探した。  
F10一瞬装着したとき、無刻印めっちゃいいやんとなってしまったので、XDAの無刻印を買った。お値段なんと2000円代。最初からそうしておけばよかったのだ。

2Uのホワイトと1Uのシアンが取り扱いなかったので、別の海外のサイトで購入。写真に貼ってるけどめっちゃいい感じになった。惜しむらくはシアンの色がもっと濃ければ文句ない。

<br />

## 👾 コンテンツ消費

### [僕のヒーローアカデミア #29-39](https://amzn.to/3UqRjSn)

アメリカNo.1ヒーロー突然の登場と死亡。からの最終決戦開始。  
トガちゃんが本気でヴィランやってて個人的にはちょっとあれ。最後までカァイイし続けて欲しかったという謎の欲求があって自分でも驚いている。  
ジェントル再登場はちょっと嬉しかったし、デクが嬉しそうだったのもよかった。

<br />

### [葬送のフリーレン #24-28](https://annict.com/works/10079)

もともと漫画派なのでアニメは流してただけだったが、1級魔法使い2次試験はめっちゃ好きなので楽しんで観た。  
フリーレンの魔法の高みはなんなのか気になる。

原作が素晴らしいため、最初アニメにはあまり興味がなかった。流し見しはじめるとあら不思議、美麗なアニメーション、マッチした音楽、素晴らしい声優さんの演技などなど、作品をよりよいものに感じさせられる要素ばかりだった。素晴らしかった。次期も期待したい。

<br />

### [21ジャンプストリート](https://filmarks.com/movies/53636)

旧Twitterで流れてきたドタバタ警官バディコメディ。正反対な二人の警官が正反対な役割で高校に潜入捜査する。

どっと笑えるところはないけど勢いに任せてガンガン進むので観ていて飽きない。4段爆発オチは少し感心した。
セクシーなお姉さん達がとてもよい。最後の最後で個人的にはいきすぎたグロ表現があるので注意。

22ジャンプストリートという次作もあるのでそれも観る予定。

### [22ジャンプストリート](https://filmarks.com/movies/58650)

高校潜入の次は大学潜入。

本編はヤケクソで作ったのかってくらいおもしろくなかったけど、エンディングで流れる怒涛の次回作消化はくすっときた。  
むしろ次回作ラッシュに一番力入ってんじゃないかとおもった。

<br />

### [ウマ娘 プリティーダービー Season 3 #1-13](https://annict.com/works/10161)

キタサンブラックが主、サトノダイヤモンドが副の主人公のシリーズ。  
栄光と衰え、そして有終の美が描かれていて感動した。また、シュバルをはじめとした他ウマ娘の活躍も描かれていて、それが更に主人公を引き立てていた。綺麗なアニメだった。

<br />

### [ヘルモード \~やり込み好きのゲーマーは廃設定の異世界で無双する\~ はじまりの召喚士 #8](https://amzn.to/43s5EAs)

際限なくインフレするのいっそ清々しい。霊薬とかいうチートアイテム好き。

<br />

### [新米オッサン冒険者、最強パーティに死ぬほど鍛えられて無敵になる。 #9](https://amzn.to/3TmOIGI)

師匠たちのしっかりした初戦闘シーンと師匠たちに匹敵する敵の存在が匂わされた。

<br />

### [SPYxFAMILY #13](https://amzn.to/43hP3z7)

SPYxFAMILY史上最大のピンチだった気もするけど呆気なく解決。黄昏に背負われて夜帷可愛いがすぎる。

<br />

### [ウマ娘 プリティーダービー ROAD TO THE TOP #1-4](https://annict.com/works/9625)

ナリタトップロード、アドマイヤベガ、テイエムオペラオーの3人(?)が主人公の短編作品。

各話の濃さと作画が尋常じゃない。ウマ娘らしいレースの熱さはそのままに、4話という短さを感じさせない作品だった。

惜しいのはアドマイヤベガの双子経緯を描こうとするあまり、最終話ナリタトップロードの勝利目前に妹の描写を入れてしまったせいで「まだレースに一波乱あるのか！？・・・ないんかーい」となってトプロの勝利に意識がいききらなかったこと。  
脚の怪我も妹が連れて行ってくれるような描写があったが、実際はこの菊花賞以降怪我が原因で引退したようだし、制作陣が何にこだわったのか知りたいところ。

<br />

### [ダンジョンに出会いを求めるのは間違っているだろうか ファミリアクロニクル episodeフレイヤ #5](https://amzn.to/3ISvvb2)

最後まで綺麗な絵で美しかった。本編知らんのでちょいちょい知ってる猫娘とかシルさんとの関係性を匂わされてもちょっとわからないですね状態だった。  
楽しめればそれでいいけど。というか本編を読もう。

<br />

### [ダンジョンに出会いを求めるのは間違っているだろうか 外伝　ソード・オラトリア #27](https://amzn.to/4cI20qr)

大迷宮攻略失敗から地上へ帰還後。

本編知らんのに外伝ずっと読んでいるものだから、本編側でも同様に騒ぎになっているのか、あくまで外伝としてロキ・ファミリアが裏側で騒いでいるだけなのかが気にはなる。あと作画崩壊気味。

<br />

### [hololive 5th fes. Capture the Moment](https://hololivesuperexpo2024.hololivepro.com)

ホロライブのフェス。通しチケットがなんと25,000円。1年に1回のお祭りなのでまあいいかと思って購入。

Day 1は全部観終わった。VTuberのライブ観てていつも思うんだけど、絶対リアルタイムで踊ってないし歌ってないのに、曲が終わったらわざとらしく息荒くするのホンマ滑稽なのいでやめてほしい。  
歌もダンスも事前収録したものを流すのはそっちのほうがクオリティ高いしVの特権だから全然いいので、むしろ開き直ってほしいまである。

<br />

### [ダイヤモンドの功罪 #1-5](https://amzn.to/3TG4Lzt)

どのスポーツでも圧倒的な才能を発揮して同年代から疎まれていた主人公・綾瀬川が野球と出会い、嫉妬や恐れを抱く同年代や自分勝手な大人たちの思惑に振り回されながらもとりあえず相手バッターを捩じ伏せていく。

前半の巻でちょっとだけ描写された甲子園？のシーンがとても良さそうだったので、そこを楽しみにしつつ今後も読んでいきたい。  
ライバルキャラになりそうな大和くんには期待。

<br />

### [アオアシ #35](https://amzn.to/3IVNcGW)

バルサユース戦の続き。

セレクションで葦人達が経験した「相手が不気味に手を挙げるアレ」を栗林込みのエスペリオンユースが喰らうという胸熱展開。この試合をどこに落とすのかこれからの展開が非常に楽しみ。

<br />

## 📷 写真

![Noraneko42A](https://d3toh8on7lf5va.cloudfront.net/noraneko42a.jpg)
Noraneko42A w/ BSUN Roselle

![Quarkeys Z40](https://d3toh8on7lf5va.cloudfront.net/z40.jpg)
quarkeys Z40 w/ Lofree Ghost  
おまけでついてきたXDALキーキャップ版

![Quarkeys Z40](https://d3toh8on7lf5va.cloudfront.net/z40-blanck.jpg)
quarkeys Z40 w/ Lofree Ghost  
ブランクキーキャップ版
