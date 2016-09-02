## Simple todo

- Stateとして `todo` `text` を管理する。
- `onClick` でtodoのリストに追加する。

### 補足

#### spread operator

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


