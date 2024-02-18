/**
 * Data Types
 * 
 * 여섯개의 Primitive Type 과
 * 한개의 Object Type
 * 
 * 1) Number(숫자)
 * 2) String(문자열)
 * 3) Bollean
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;

console.log('---typeof infinity---');
console.log(typeof infinity);
console.log(typeof nInfinity);

/**
 * String 타입
 */

const laze = 'laze';
console.log(typeof laze);

const stringExample = "'laze' javascript";
console.log(stringExample);

/**
 * Template Literal
 * 1) newLine \n
 * 2) tab \t
 * 3) \ \\
 */

const templateLiteral = 'template\nLiteral';
console.log(templateLiteral);

const backtick = `template
Literal`;
console.log(backtick);

console.log(`${laze} backtick variable`);

/**
 * Boolean Type
 */

const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);


/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit); // 값 undefined, Type undefined


/**
 * null Type
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용한다.
 */

let init = null;
console.log(init);
console.log(typeof init); // JavaScript에서 null은 null타입이어야 하는데 object 타입으로 인식됨 실제 버그지만 이대로 작성된 코드들떄문에 변경안하는 상태

/**
 * Symbol Type
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 Primitive 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '2';

console.log(test1 === test2); // false

const test3 = '3';
const test4 = '3';

console.log(test3 === test4); // true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); // false


/**
 * Object Type
 * Map
 * Key : Value pair
 */

const dictionary = {
    red: '빨간색',
    blue: '파란색',
}

console.log(dictionary);
console.log(typeof dictionary);

console.log(dictionary['red']); // 가져오고 싶은 Value의 key를 입력하면 value를 가져올 수 있음

/**
 * Array Type
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 */

const memberArray = [
    '홍길동',
    '유관순',
    '김김',
]

console.log(memberArray);
console.log(typeof memberArray);

/**
 * index
 * 0부터 시작
 * 1씩 올라감
 */

console.log(memberArray[1]);

memberArray[0] = '변경후이름';
console.log(memberArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시를 한다.
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
 *
 * javascript = dynamic typing
 */



