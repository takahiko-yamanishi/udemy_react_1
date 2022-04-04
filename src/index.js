/**
 * const.let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// // 波線はESLintのエラーであり、JavaScriptとしてはエラーにならない。
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "let変数を再宣言" //SyntaxError: /src/index.js: Identifier 'val2' has already been declared (25:4)

// const
// const val3 = "const変数"
// console.log(val3);

// // const変数は上書き不可能
// val3 = "const変数を上書き"; //"TypeError: "val3" is read-only
// const val3 = "const変数を再宣言"; // SyntaxError: /src/index.js: Identifier 'val3' has already been declared (33:6)

// /** constで定義したオブジェクトはプロパティの変更が可能 */
// const val4 = {
//   name: "テスト",
//   age: 28
// };
// console.log(val4);
// val4.name = "上書き"
// val4.address = "Tokyo"
// console.log(val4);

// /** constで定義した配列はプロパティの変更が可能 */
// const val5 = ["dog", "cat"];
// val5[0] = "bard";
// val5.push("dog");
// console.log(val5);

/**
 * テンプレート文字列
 */
