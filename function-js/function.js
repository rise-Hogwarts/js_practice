// funcion 関数名(){
//   処理内容
// }

// 引数  →  入力する値
// 戻り値  →  出力される値

let alertString;
alertString = addString("Webcamp");
alert(alertString);


function addString(strA){      //関数addStringを宣言
  let addStr = "Hello " + strA;  //変数addStrに"Hello"と変数strAを結合
  return addStr;  //16行目の変数addStrを出力
}



//ジャンケン関数


let promptStr = prompt('何か好きな文字を入力して下さい');
alert(promptStr);  //変数promptStrにブラウザ上で入力した言葉をalertで表示


let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');



function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;

  if(js_hand_num == 0){
     hand_name = "グー";
  } else if(js_hand_num == 1){
     hand_name = "チョキ";
  } else if(js_hand_num == 2){
     hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}