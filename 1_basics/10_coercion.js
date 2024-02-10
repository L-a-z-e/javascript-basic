/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;
console.log(typeof age);

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적
let test = age;
console.log(typeof test);
test = age + '';
console.log(typeof test, test);

console.log('98' + 2); // string으로 변환돼서 982가 나옴
console.log('98' * 2); // 강제적으로 형변환 string에는 * 가 없으므로
console.log('98' - 2); // -도 없어서 숫자로 변환해서 돌아감
// 기능적으로 가능하지만 가독성이 좋지 않으므로 피할 것


/**
 * 명시적 형변환
 */

console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), Infinity.toString());

// 숫자 타입으로 변환

console.log(typeof parseInt('0'), parseInt('0.99)'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');


/**
 * Boolean Type 으로 변환
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 */

console.log(!'x'); // string 값 안에 값이 들어있으면 Boolean 기준으로는 true
console.log(!!'x');
console.log(!!'');
console.log(!!false);
console.log(!!'false');
console.log(!!undefined);
console.log(!!null);

console.log(!!{}); // object는 값이 들어있던 안들어있던 true;
console.log(!![]); // array도 마찬가지로 값이 있던 없던 true;