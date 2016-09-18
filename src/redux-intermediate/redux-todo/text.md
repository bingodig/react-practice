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
