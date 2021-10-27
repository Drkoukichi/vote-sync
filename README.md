# プロトコル一覧表
## 送信プロトコル
送信には以下の配列のaの内容で内容を判別する
send = [a,b,c]
 a:通信の種類を把握する 0〜3の整数
 > 0: リセット通信
 > 1: 投票通信
 > 2: 確認通信

### a=0
リセット通信は親機から子機に送信される。
通信を受け取ることで投票が可能になる。
> b:選択肢の数を送信 (2〜5の整数)
> c:予約(機能追加時に使う現状は0で送信する)

### a=1
投票通信である。通信時に投票内容と一意の乱数を生成する。デバイスで保管する。
リセット通信を受け取ることで送信できるようになる。

## 拡張機能として使用

このリポジトリは、MakeCode で **拡張機能** として追加できます。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **新しいプロジェクト** をクリックしてください
* ギアボタンメニューの中にある **拡張機能** をクリックしてください
* **https://github.com/drkoukichi/vote-sync** を検索してインポートします。

## このプロジェクトを編集します ![ビルド ステータス バッジ](https://github.com/drkoukichi/vote-sync/workflows/MakeCode/badge.svg)

MakeCode でこのリポジトリを編集します。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **読み込む** をクリックし、 **URLから読み込む...** をクリックしてください
* **https://github.com/drkoukichi/vote-sync** を貼り付けてインポートをクリックしてください

## ブロックのプレビュー

この画像はマスター内の最後のコミットからのブロックコードを示しています。
このイメージは更新に数分かかる場合があります。

![生成されたブロック](https://github.com/drkoukichi/vote-sync/raw/master/.github/makecode/blocks.png)

#### メタデータ (検索、レンダリングに使用)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
