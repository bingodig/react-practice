## Redux Todo

### 概要

- Redux(flux)を使ったTodoアプリ

### 構成

#### Entry Point
  - index.js

  最上位の表示のためのテンプレート。他のComponentを呼び出すことでブラウザに表示を行います。

#### Action Creators
  - actions/index.js

  `action`は何が起こるかを記述したオブジェクトでdispatchを通して現在のstateと合わせてreducerに送ります。

#### Reducers
  - reducers/todos.js
  - reducers/visibilityFilter.js
  - reducers/index.js

  reducerはdispatchによって受け取った現在のstateとactionから新しいstateを生成する関数です。

#### Presentational Components
  - components/Todo.js
  - components/TodoList.js
  - components/Link.js
  - components/Footer.js
  - components/App.js

  Presetational Componentsは見た目(markup, stype)に関するcomponentです。データのloadやlogic部分は感知せずUI部分のみ扱います。そのためReduxを感知せず、propsをcallbackから呼出したときにのみデータが変わります。logic部分にのみ対応するためテンプレートの使い回しがしやすく、デザイナーもUI部分の把握をしやすくなります。

#### Container Components
  - containers/VisibleTodoList.js
  - containers/FilterLink.js

  Container Componentsはデータのfetchやupdateなどのデータを扱うconponentです。Reduxを監視してReduxのactionをdispatchします。基本的なスタンスとしてPresentational Componentsで記述していき、データの受け渡しにReduxのstoreが必要になったときにContainer Componentsを作成します。また、記述量が少ないときはstyleとlogicを混合させたままでもよいですが、その後必要に応じて切り分けることも必要になります。

#### Other Components
  - containers/AddTodo.js

  Presentational ComponentsとContainer Comoponentsの両方のstyle、logicが合わさった形になったファイルです。切り分ける量がないときはひとつのファイルのままでもよいですが、今後必要に応じてcomponentを切り分ける必要はあります。


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
