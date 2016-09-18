## Counter with react-redux

### 機能

- Redux(flux)を使うカウンタ
- `react-redux`のモジュールを利用する

[counter w/ redux](/#/redux-basic/redux-counter) でReduxを使ってCounterアプリを作成しました。ここではより実践的なプラクティスとして`react-redux`のモジュールを使ってCounterアプリを作成してみます。
特に`connect()`関数が`react-redux`パッケージで提供されているので使用していきます。
また、React + Reduxの開発では`Presentaional Component`と`Container Component` に分離することがよいとされています。`Presetional Component`が表示部分を担い、`Container Component`がロジック部分を担います。このプラクティスを実現するためにも`connect()`関数は重要です。

[Usage with React](http://redux.js.org/docs/basics/UsageWithReact.html) に詳しく説明されています。深く知りたい方はご覧下さい。

### react-reduxでの開発の基本

1. createStoreでstoreを作成する
2. actionを用意する
3. reducerを用意する
4. `Presentational Component`を用意する
5. `Container Component`を用意する(ここで`connect関数`の登場`)

#### 1. createStoreでstoreを作成する

`createStore`でstoreを作成し、`Provider`で`App`を囲むことがポイントです。

```
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterApp from './reducers';
import App from './App';

let store = createStore(counterApp);

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
```

#### 2. actionを用意する

`actions/index.js`のようにして`action`のファイルを作成します。

```
export const counter = (behavior) => {
  return {
    type: 'COUNTER',
    behavior
  }
}
```

#### 3. reducerを用意する

`reducers/counter.js`のようにreducerを用意します。必要に応じて複数のファイルを用意します。

```
const counter = ( count = 0, action ) => {
  switch(action.type) {
    case 'COUNTER':
      switch(action.behavior) {
        case 'INCREMENT':
          return count + 1;
        case 'DECREMENT':
          return count - 1;
      }
    default:
      return count;
  }
}

export default counter;
```

#### 4. `Presentational Component`を用意する

見た目のための記述です。引数で受けている変数は`Container Component`で用意します。

```
import React, { PropTypes } from 'react';

const Button = ({behavior, children, onClick}) => {
  return (
    <button
      onClick={onClick}
    >{ children }</button>
  )
}

Button.propTypes = {
  behavior: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
```

#### 5. `Container Component`を用意する(ここで`connect関数`の登場`)

ここでは`Presentational Component`のための変数を用意します。`mapStateToProps`で`state`関連の変数を用意して、`mapDispatchToProps`で`dispatch`関連の変数を用意します。また、ポイントとなるのは`connect()`関数で`mapStateToProps`と`mapDispatchToProps`を`Button`という`Presentational Component`に結合しています。

```
import { connect } from 'react-redux'
import { counter } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state, ownProps) => {
  return {
    behavior: ownProps.behavior
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(counter(ownProps.behavior))
    }
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Counter;
```

reducerはひとつにまとめる必要があるので`combineReducers`を使います。以下の例はreducerがひとつなので使う必要はないのですが複数のredcerに対応する必要が出たときのためにあえて使っています。

```
import { combineReducers } from 'redux';
import counter from './counter';

const counterApp = combineReducers({
  counter
})

export default counterApp;
```


### Redux Data Flow

Reduxは一方向のデータフローを持ちます。
Reduxのライフサイクルは以下の4ステップです。

#### 1. store.dispatch(action)のcall
`action`とは、以下のような何が起こるかを記述したオブジェクトです。

```
{ type: 'ADD_TODO', text: 'Practice React' }
```

`action`は以下のようにオブジェクトそれぞれを1事象として考えると分かりやすいです。
厳密ではありませんが、`type`が動詞(Verb)でその他のkeyが目的語(Object)にあたると考えるとよいです。

```
「Practice React」というtext(text: 'Practice React')をタスクとして追加する(type: 'ADD_TODO')
```

アプリ内のどこからでも`store.dispatch(action)`を呼び出すことが出来ます。

#### 2. Redux storeがreducer functionをcallする

`store`はdispatchのcallの後に`reducer`に対して現在の`state`と`action`のデータを渡します。

```
// 現在のstate
 let previousState = {
   visibleTodoFilter: 'SHOW_ALL',
   todos: [
     {
       text: 'Read the docs.',
       complete: false
     }
   ]
 }

 // actionの設定
 let action = {
   type: 'ADD_TODO',
   text: 'Understand the flow.'
 }

 // reducerに現在のstateとactionを渡す。次のstateが返ってくる
 let nextState = todoApp(previousState, action)
```

`reducer`は次のstateを計算するただの関数です。APIのcallやrouterの遷移は行いません。

### 3. root reducerが複数のreducerからのoutputをひとつのstate treeに結果をまとめる

`route reducer`をどのように作るかは自由です。Reduxにはreducerをまとめてくれる`combineReducers()`という便利なhelper関数があります。

以下の例では`todos`というreducerと`visibleTodoFilter`というreducerをひとつにまとめる例です。

```
 function todos(state = [], action) {
   // 色々な処理
   return nextState
 }

 function visibleTodoFilter(state = 'SHOW_ALL', action) {
   // 色々な処理
   return nextState
 }

 let todoApp = combineReducers({
   todos,
   visibleTodoFilter
 })
```

`combineReducers`の返り値の`todoApp`は2つのreducerを呼び出せます。

```
let nextTodos = todos(state.todos, action)
let nextVisibleTodoFilter = visibleTodoFilter(state.visibleTodoFilter, action)
```

2つの結果は1つのstate treeとしてまとめられます。

```
return {
  todos: nextTodos,
  visibleTodoFilter: nextVisibleTodoFilter
}
```

ただし、`combineReducers()`を必ずしも使う必要があるということではありません。

### 4. root reducerから返ってきたstate tree をstore がsaveする

新しい state treeが次のstateになります。`store.subscribe(listener)`で登録された全てのlistenerが発火します。`store.getState()`で現在のstateの値を取り出せます。
これでUIにも新しいstateが反映されます。`react-redux`のbindingを使っていれば、このタイミングが`component.setState(newState)`が呼び出されるタイミングになります。
