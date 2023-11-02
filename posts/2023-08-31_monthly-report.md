---
title: Monthly Report Aug 2023
publish_date: 2023-08-31
tags: [monthly_report]
---

2023年8月の生存報告。

## 📚 学んだこととかやったこと

### [1日1問、半年以内に習得　シェル・ワンライナー160本ノック](https://amzn.to/41AQRk6)

問77-85

- `grep`
  - `-H`で検索結果にファイル名を付与
  - `-f`で指定したファイルの内容を元に検索
  - `-q`で検索結果を標準出力に出力しない。終了コードのみ欲しい時に便利
- `bc`
  - "obase=16;ibase=2;11110011"というような書式で`bc`コマンドに食わせると`F3`と2進数から16進数に変換してくれる
- `&>`
  - 標準出力と標準エラー出力を両方同じ場所にリダイレクトする記法。`2>&1`と似たようなもの
- `xxd`
  - バイナリを16進数に変換してくれるコマンド。`-p`オプションをつけると他のコマンドに渡しやすくシンプルに出力できる
- `split`
  - バイナリファイルを分割できる。`split -b 1000 file file.`みたいに指定すると、`file.aa, file.ab`みたいなファイル名で1000バイト単位に分割してくれる
  - さらに`--numeric-suffixes=1`と指定すると`file.01, file.02`のように数値の連番で生成できる

<br />

### [プロを目指す人のためのTypeScript入門](https://amzn.to/3jI4HRS)  

一旦読み終わった。偉い。  

<br />

### [ryoo.cc](https://ryoo.cc)をお洒落な感じにした

YouTubeみてるとお洒落なCSSを紹介する動画が大量に流れてくるので、それを参考に文字列タイピングアニメーションをCSSで書いた。  
なんかいい感じなった気がする。

<br />

### [Vimのカスタムカラースキーム作り始めた](https://github.com/ryoo14/nautitwilight.vim)

![screenshot](https://github.com/ryoo14/nautitwilight.vim/blob/main/screenshots/typescript.png?raw=true)

最近ゲリラ豪雷雨が凄いこともあって窓の外を確認する頻度が増えたからか、黄昏時の綺麗な空を見る機会が増えた。  
そんな折に[こんな記事](https://medium.com/eureka-engineering/recommend-generating-own-colorsheme-3114abe3e1d)を見かけたのでじゃあ作ろうと思い立って作り始めた。

記事に書いてあるツール便利なんだろうけど一回しか作らないもののためにややこしそうなツールの使い方調べる気にならなかったのでhighlight groupひとつずつガチャガチャしている。今のところ楽しい。

<br />

## 🧐 おもしろそうだったこと

### [アトピー性皮膚炎におけるプロアクティブ治療](https://www.kyudai-derm.org/atopy/docter/16.html)

僕は長年アトピーを患っていて、幼い頃病院に連れ回された嫌な記憶のせいですっかり病院嫌いになり、成人して10年以上経った今も病院に行かないから全然良くなっていない。  
自分自身は見た目に全く気を使わないので肌が傷ついていても大して気にならんのだけど、娘に「パパ、お肌だいじょうぶ？」って聞かれてからちょっと考えが変わった。

娘には肌も含めてカッコいいパパとして見てほしいので治療頑張ろうという気になったのであった。  
昔は副作用がやばすぎると教え込まれて長らく辞めていたステロイドを本当に久しぶりに再開して、自分でも驚くくらい効果が出ているので継続していきたい。

<br />

## 👾 コンテンツ消費

### [好きな子がめがねを忘れた #3-5](https://annict.com/works/10399)

アニメのほう。観れば観るほど小村くんがキモい。でも幸せそうだからいい。癒される。

<br />

### [ライザのアトリエ ～常闇の女王と秘密の隠れ家～ #3](https://annict.com/works/10590)

むちむち錬金術師。最近気づいたけど、どうやら太ももだけではないらしい。

<br />

### [STEINS;GATE #1-16](https://annict.com/works/865)

名作と噂の作品。とぅっとぅるー。  
かつてのインターネッツに思いを馳せられる。あとニコ動でよく耳にしたフレーズが大量に登場して無駄にノスタルジック。

物語としては本当に過去にメールを送ることができることがわかり、いい感じに物語が加速するようなもう少し勿体ぶるような絶妙な地点。  
ルカくんが最高に可愛い。まゆしぃ生きてくれ。

<br />

### [ムーンフォール](https://filmarks.com/movies/98964)

ある日突然月の軌道が変わって地球に落ちてくるお話。  
宇宙にみ物理にも全く詳しくないけど、ツッコミどころが多い印象。とはいえ映像はとても綺麗でストーリーもおもしろい。

残念なのは、グレた息子氏の影が思ったより薄いことと、アルマゲドンリスペクトなのか知らんけどKCが死んだこと。

<br />

### [好きな子がめがねを忘れた #11](https://amzn.to/3OUENHm)

漫画のほう。もうぎゅっとしてむちゅっとして好きなだけイチャイチャしろという感じ。

<br />

### [ニトの怠惰な異世界症候群 〜最弱職<ヒーラー>なのに最強はチートですか？〜 #6](https://amzn.to/47GMlEW)

あっさり復讐完了。ここからどうするんだ？元クラスメイトたちと殺し合うのかしら。

<br />

### [サラリーマンが異世界に行ったら四天王になった話 #7](https://amzn.to/3qwGgun)

異世界に転生したサラリーマンが持ち前の営業スキルでファンタジー世界で活躍するお話。何故この漫画買ってるのかわからんレベル。

<br />

### [メイドインアビス #12](https://amzn.to/3qI6ji0)

リコに欲望の揺籃を使わせる気だな！？みたいな壮絶な匂わせから特に何もなく終わったファプタ編を乗り越え、神秘卿と邂逅。
いよいよアビスを取り巻く呪いとか思惑の色も濃くなり、クライマックスが近い気配。巫女とはいったいなんなのか楽しみ。

<br />

### [リィンカーネーションの花弁 #14-18](https://amzn.to/3YKVxV4)

刊行ペースが遅くてまったく物語を覚えてないシリーズN弾。  
項羽とバチバチやりあってたころが懐かしい。そんな項羽はとても偉い廻り者だったようだ。

<br />

### [トリリオンゲーム](https://amzn.to/3E5pUfo)

メディア、報道の世界での戦い。いよいよドラマ撮影現場を全て押さえるとかいうとんでもバトルに発展してきた。

<br />

### [ダンジョンに出会いを求めるのは間違っているだろうか ファミリアクロニクル episodeフレイヤ #4](https://amzn.to/3qCduZ8)

フレイヤ様相変わらずお美しい。

<br />

### [便利屋斎藤さん、異世界に行く #9](https://amzn.to/47Bgqpv)

やっと蟲終わった！救われた！

<br />

### [アルジャーノンに花束を](https://amzn.to/3QZFdOa)

知的障害をもつチャーリィが「かしこくなる」手術を受け、圧倒的な天才となり、また元に戻るまでの過程と苦悩の物語。
アルジャーノンのおはかに花束を、の最後の一文は胸にくるものがある。

<br />

## 📷 写真

今月もたくさん写真撮ったけど時間の関係上なし。
