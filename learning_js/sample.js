// 　　変数において
// 　　varは再宣言および再代入ができる
// 　　letは再代入だけできる
// 　　constは再宣言および再代入のどちらもできない
// let nickname = "taro";
// console.log(nickname);

// nickname = "rise";
// console.log(nickname);

// var nickname = "ichiro";
// console.log(nickname);

// alert(nickname);


// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

for(let i = 0; i < 10; i++){  // iをletで宣言する理由はループするたびにiに再代入を行うため
  if(i % 2 == 0){
    console.log(i);
  }
}

//   constは再定義再代入をしていないので値の変更が行われているか
//   チェックするときに全てのコードを確認する必要はなくなる
