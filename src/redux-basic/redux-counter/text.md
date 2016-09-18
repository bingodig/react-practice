## Counter with redux

### 機能

- Redux(flux)を使うカウンタ

### Reactメソッド

#### componentWillMount()
ReactのComponentのメソッド。ComponentがDOMに追加される前に一度だけ呼び出されます。


#### componentWillUnMount()
ReactのComponentのメソッド。ComponentがDOMから削除されるときに呼ばれます。
イベントの解除等を行います。

### Redux

Reduxのフローを簡単に説明します。これまで`state`を使って状態をComponentごとに管理していましたが、`store`として1箇所に状態を管理する場所を作るイメージです。

1. ユーザーのinoutに応じたactionと現在のstateの2つをstoreにdispatchする
2. storeはこのactionとstateをReducerに渡し、Reducerは新たなstateを返す(Reducerは純粋な関数）
3. stateの変更をUIが反映する
4. ユーザーの新たなinputを受けて1に戻る

#### createStore()

storeを作成する関数。第一引数にはReducerが来ます。

```
const store = createStore(counter)
```

#### store.dispatch(action)

dispatchします。引数にはactionが来ます。

```
store.dispatch(action)
```

#### actionとReducerの定義

actionは以下のようにtypeと他の変数を持ったオブジェクトです。

```
{type: 'INCREMENT', id: 1}
```

Reducerは以下のような純粋な関数です。第一引数には現在のstateを第二引数にはactionを渡します。
返り値として新たなstateを定義します。

```
function counter(count=0, action) {
  switch(action.type) {
    case: 'INCREMENT':
      return count + 1;
    default:
      return count;
  }
}
```

#### subscribe

変更を受けるためには以下のような記述をComponent内に入れる必要があります。

```
componentWillMount() {
  this.unsubscribe = store.subscribe(this.forceUpdate.bind(this))
}

componentWillUnmount() {
  this.unsubscribe()
}
```

ここでは`subscribe`を使ってリッスンしますが、`react-redux`等を使えば`subscribe`を自分で書く必要はなくなります。自分で`subscribe`を書くより最適化されているようです。

### getState()

以下のようにすればstoreのstateにアクセス出来ます。

```
store.getState()
```

### テスト

debugもかねてテストを書いてみます。
以下で`expect`をimportします。

```
import expect from 'expect'
```

(expectの中身)は(toBe)になるといった感じで異なるとエラーが出ます。

```
expect(counter(0, {type: 'INCREMENT'})).toBe(1)
```
