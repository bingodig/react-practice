## Reddit App
この章は以下のRedux Tutorialを用いています。
[Redux Tutorial 1.4 Advanced](http://redux.js.org/docs/advanced/)

React + Reduxで非同期通信を用いたアプリケーションの作成をします。

### Redditとは？

[Reddit](https://www.reddit.com/)は英語ベースのオンラインコニュニティです。あるユーザーが投稿したリンクについて別のユーザー達がコメントする場になっています。

#### subreddit

redditはかつて、reddit本体（あらゆるトピックを扱う）とsubreddit(特定のトピックを扱う）が合わさって構成されていました。今はsubredditの集合体がredditという形になっています。
subredditは「カテゴリー」のようなものですが、ユーザーなら誰でも作成可能です。また、`http://reddit.com/r/...`というURLの形式をとります。
本章でも`http://reddit.com/r/....json`のようなURLにアクセスしてデータを取得します。

## 非同期処理 (isomorphic-fetch)

まず、`isomorphic-fetch`をimportします。

```
import fetch from 'isomorphic-fetch'
```

以下のように使って、jsonデータをfetchすることが出来ます。

```
function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}
```

## Middleware

### redux-logger

Stateがどう変わったか、どのActionがdispatchされたかをログとして表示します。

### redux-thunk

通常dispatchにはアクションを定義したオブジェクトを渡すのですが、非同期処理でアクションを起こすような関数でもdispatchに渡せるようにします。
Reducer自体は関数のまま、同期・非同期のどちらでも統一したインターフェイスで扱えるようになります。

### 設定サンプル

```
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
```
