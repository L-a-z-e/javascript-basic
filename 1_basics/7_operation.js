/**
 * operation
 * 
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);

console.log(10 * (10+10));

let number = 1;
number ++;
console.log(number);

number--;
console.log(number);


let result = 1;
console.log(result);

result = number++; // = 먼저 그다음 ++ 연산 (후위))
console.log(result, number); 

result = ++number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 를 사용하면?
 */

let sample = '99'
console.log(+sample);
console.log(typeof +sample);
console.log(typeof sample);

sample = true;
console.log(+sample); // + 붙여서 숫자로
console.log(typeof +sample);
console.log(sample);
console.log(typeof sample);

// sample = '홍길동'
// console.log(+sample); 
// NaN Not a Number


/**
 * 할당 연산자 (assignment operator)
 * 
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */


// 값의 비교
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(true == '1');

// 값과 타입의 비교
console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(true === '1');

// 값의 비교
console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(true != '1');

// 값과 타입의 비교
console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(true !== '1');

/**
 * 대소 관계 비교 연산자
 *
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */

console.log(10 < 0 ? 10 : false); // 표현식 ? 참 : 거짓

/**
 * 논리 연산자
 * && ||
 */

console.log(true && true);
console.log(true || false);
console.log(true && false || true);

/**
 * 단축평가 (short circuit evaluation)
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 * 
 * 그냥 외워야 되는 부분
 */

console.log(true || 'laze'); //  || true -> left
console.log(false || 'laze'); // || false -> right
console.log(true && 'laze'); // && true -> right
console.log(false && 'laze'); // && false -> left

/**
 * 지수 연산자
 */
console.log(2 ** 2); 
console.log(10 ** 3);

/**
 * null 연산자
 * ?? 좌측값이 null 또는 undefined이면 우측값을 반환
 */

let nullVariable;
console.log(nullVariable);

nullVariable = nullVariable ?? 'laze';
console.log(nullVariable);

let nullVariable2;
nullVariable2 ??= 'laze'; // += -= 이랑 동일함
console.log(nullVariable2);



