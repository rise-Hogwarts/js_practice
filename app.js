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
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');