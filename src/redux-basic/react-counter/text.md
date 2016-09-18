## Counter without redux

まずは、Reactの復習もかねてReactだけでcounterを作ってみましょう。

### 機能

- Redux(flux)を使わないカウンタ
- ComponentのStateでカウンタの値を管理する

### 次の章に進む前に

この章以降をやる場合は`package.json`の43~46行目あたりの

```
"dependencies": {
  "react": "^0.14.6",
  "react-dom": "^0.14.6"
}
```

を以下のように変更して下さい。

```
  "dependencies": {
    "expect": "^1.20.2",
    "json-loader": "^0.5.4",
    "raw-loader": "^0.5.1",
    "react": "^15.2.1",
    "react-dom": "^15.2.1",
    "react-markdown": "^2.4.2",
    "react-redux": "^4.4.5",
    "redux": "^3.5.2",
    "redux-logger": "^2.6.1",
    "redux-thunk": "^2.1.0"
  }
```

そして

```
$ npm install
$ npm start
```

をやり直して下さい。
