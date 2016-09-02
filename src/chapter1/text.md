## Props

### Component外部からのpropsの設定

Componentの外部からpropsを与えることが出来ます。

例えば、`Name`というComponentを呼び出す際にそのComponentの属性を設定することが出来ます。イメージとしてはオブジェクトにインスタンス変数を設定するような感じです。例えば、`name`をpropsとして設定してみましょう。以下のように、`Name` Componentに`name`というpropsを設定出来ます。

```
<Name name={ name } />
```

### Component内部でのpropsの利用

さて、次にComponent内部で設定されたpropsの使い方を見てみます。

設定されたpropsを使うには `this.props` を使います。例えば、`name`というpropsにアクセスするためには`this.props.name`とします。

```
class Name extends Component {
  render() {
    const name = this.props.name;

    return <span>{ name }</span>
  }
}
```

これで、propsに設定された`name`を表示することが出来ます。


## State

stateはComponetの内部の状態を保持するために使われます。

下記では、Component内部に`name`というstateを設定しています。
初期値は空で設定していますが、Input要素の値の変化を`onChange`でListenしてvalueの値が変わる度に処理を実行しています。ここでは、処理として`setState`を実行しています。これはstateの値を変更しています。注意が必要なのは `this.state.name = "new name"` のように直接値の変更はせずに必ず `setState` を使って値の変更をする必要があるということです。stateは`immutable`です（つまり、変更しても表示上何も変更が起きません。）。`setState`を使うことでstateの表示を反映することが出来ます。


```
class default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  render() {
    const name = this.state.name;

    return (
      <div>
        <h1>Hello, <Name name={ name } />.</h1>
        <input
          type="text"
          value={ name }
          onChange={ e => {
            this.setState({
              name: e.target.value
            })
          }}
        />
      </div>
    );
  }
}
```
