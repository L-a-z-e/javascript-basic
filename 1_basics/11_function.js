/**
 * function -> 함수
 */

/**
 * DRY
 * D -> Don't
 * R -> Reapeat
 * Y -> Yourself
 */

function calculate(number){
    console.log((number * 10 / 2 % 3).toString())
}

calculate(3);
calculate(4);

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter
 * 실제 입력하는 값은 argument라고 한다.
 * number => Parameter
 * 3, 4 => argument
 */

function multiply(x, y){
    console.log(x * y)
}

multiply(3,4);

// default Parameter
function multiply(x, y = 10){
    console.log(x * y);
}

multiply(2,4);
multiply(2);

/**
 * Return
 * 반환
 */

function multiply(x, y){
    return x * y
}

const result = multiply(2,3);
console.log(result);

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
    return x * y
}

console.log(multiply2(2,5));

// 간결하게
const multiply3 = (x,y) => x*y
console.log(multiply3(3,4));

// 파라미터가 1개일때
const multiply4 = x => x*2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(3))

function multiply6(x){
    return function(y){
        return function (z){
            return `x: ${x} y: ${y} z:${z}`;
        }
    }
}
console.log(multiply6(1)(2)(3));

const multiply7 = function(x,y) {
    return x * y;
}

console.log(multiply7(2,3));

const multiply8 = function(x, y, z){
    console.log(arguments); // keyword 함수를 실행할때 입력한 argument 값을 출력할 수 있음
    return x * y * z;
}

console.log(multiply8(4,5,6));

const multiply9 = function(...argument){
    return Object.values(argument).reduce((a, b) => a * b, 1);
}

console.log(multiply9(1,2,3,4,5,6,7));


// immediately invoked function 즉시 실행 함수 함수를 ()로 감싸고 뒤에 ()에 argument
(function(x, y){
    console.log(x * y);
})(1,2)

console.log(typeof multiply);
console.log(multiply instanceof Object); // 좌측과 우측이 같은 타입인가? 함수는 Object 이므로 true