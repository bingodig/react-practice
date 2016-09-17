## JavascriptのTips

### アロー関数とbind

ES6ではアロー関数と言われる`=>`でfunctionを表現する書き方があります。
この書き方のおかげですっきりとした記述が出来ています。

```
<input
  type="text"
  onChange={ e => {
    this.setState({
      name: e.target.value
    }}
/>
/>
```

さて、アロー関数を使わない場合どうなるのでしょうか？
以下のように`function`を使って記述してみます。そうすると、`this`に対してundifinedエラーが出てしまいます。実はアロー関数は`this`を自動でbind(結びつけてくれる）をしていたのですが、JSの`function`は認識してくれません。スコープの範囲が違います。bindすると1段上の`this`を呼び出してくれるのです。

```
<input
  type="text"
  onChange={ function(e) {
    this.setState({
      name: e.target.value
    })
  }}
/>
```

もし`function`で記述したい場合はしっかりとbindを記述する必要があります。

```
<input
  type="text"
  onChange={ function(e) {
    this.setState({
      name: e.target.value
    })
  }.bind(this)}
/>
```

`this`が自動でbindするのが好ましくない場合もあるかもしれませんが、ここではすっきり書けて嬉しいです。違いを理解して`bind`されているという意識は持っておいたほうが良いです。

自分でfunctionを定義するときは`bind`を明示的に書く必要があります。
覚えておきましょう。

以下を`constructor`に前もって書いてbindさせることも出来ます。

```
this.addTodo = this.addTodo.bind(this)
```

### constructorの呼出

constuctorを呼出し初期値を設定することがあると思います。そのときは必ず`props`メソッドを呼出しておきましょう。`constructor`をオーバーライドするため呼び出します。

```
constructor(props) {
  super(props);
  this.state = {
    name: ''
  }
}
```


### spread operator

ES6から`spread operator`が使えるようになりました。うまく活用出来ると便利です。
配列などのオブジェクトを文脈に合わせて展開してくれます。

```
let arr = [ 1, 2, 3 ];

console.log(arr);
// [1, 2, 3]
console.log(...arr);
// 1 2 3
```

従来だと`concat`等で配列を結合していたところを以下のように記述することが出来ます。

```
let arr1 = [ 1, 2, 3 ];
let arr2 = [ 4, 5, 6 ];

// spread operator
let arr = [...arr1, ...arr2];
// concat
let arr = arr1.concat(arr2);
```

### map

以下のように配列を展開して使うときは`map`を使います。Reactではこのように展開するときは`key`属性で連番を指定する必要があるのでこのような書き方をすることは覚えてしまいましょう。

```
todos.map((todo, i) => {
  return (
    <li key={i}>{ todo }</li>
  )
})
```
