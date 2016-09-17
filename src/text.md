## はじめに

このアプリケーションははじめてReactを学ぶ人向けの教材となります。
ハンズオンで実際に手を動かすところに重きをおきます。

説明自体はあまり詳しく書いていないので追加してくれる方は以下のレポジトリにプルリクをお願いします。また、issueでも構いません。
[kuboshizuma/react-practice](https://github.com/kuboshizuma/react-practice)

ソースコードがそのまま答えになるので分からない内は真似して動かしてみましょう。

## 環境構築

自分でReactの環境をセットアップ出来る方はそれで問題ありません。
以下、npmが使える環境が前提になっています。

[gaearon/react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)
を使ってセットアップします。

```
$ git clone git@github.com:gaearon/react-hot-boilerplate.git
$ cd react-hot-boilerplate
$ npm install
$ npm start
```

` http://localhost:3000/`にアクセスして 「Hello, world.」が表示されれば成功です。

`src`ディレクトリ以下に記述していくことでReactを実装していけます。
(webpackの設定より）
