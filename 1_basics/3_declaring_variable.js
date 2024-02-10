/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */

var name = 'laze';
console.log(name);

var age = 30;
console.log(age);

let code = 'A'
console.log(code);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

code = 'B';
console.log(code);

const code2 = 'C'
console.log(code2);

// code2 = 'D'
// console.log(code2)

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것
 * var name;
 * 
 * 2) 할당
 * name = 'laze';
 */

let declare;
console.log(declare); // undefined

// const declare2; const keyword는 값 초기화 후 사용해야함
