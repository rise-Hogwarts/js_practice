let hello = "Hello World";
alert(hello);
alert("test");


// 　'if'による条件分岐
let orange = 100;
let apple = 10;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if (orange == apple) {
  alert('みかんとりんごが同じ値段');
}else{
  alert('みかんの値段がりんごより高い');
}


//　’while’による繰り返し処理
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 3;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');