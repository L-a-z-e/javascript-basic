/**
 * Hoisting
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것 처럼 느껴지는 현상
 */

console.log('hello');
console.log('world');

console.log(name);
var name = 'laze';
console.log(name);

// 다음과 동일한 결과
// var name;
// console.log(name);
// name = 'laze';
// console.log(name);


// cannot access 'email' before initializtion
// console.log(email);
// let email = 'yysi8771@gmail.com';

// eamil is not defined
// let과 const를 var 대신 쓰는 이유중하나 초기화를 하지 않은 경우 var 는 undefined를 let은 초기화부터 하라고 출력됨
console.log(email);
