/* １.elseを使用する時の注意点
elseは条件に関係なく、ifの条件に当てはまらなかった時だけ処理される。
elseの使用はifがある時だけ使用できるので独立して使用はできない。
またif文とelseの間に処理を書いてもエラーとなってしまう。 */

/* 2.JavaScriptで実装した時の確認ポイント
エラーが発生するとコンソールにエラーが表示されているので、
実装した時は動くどうかの確認とコンソールにエラーを表示していないかも確認する。
*/

var number = 10;
if (number < 5) {
  console.log("trueの処理");
  console.log(number);
} else {
  console.log("falseの処理");
  console.log(number);
}

var text = "javascript";
if (text == "あ") {
  console.log("trueの処理");
  console.log(text);
} else {
  console.log("falseの処理");
  console.log(text);
}
