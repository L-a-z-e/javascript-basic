/**
 * Scope
 */

var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}

levelOne(); // 함수를 선언하면 상위 스코프 변수 사용가능

function levelOne(){
    var numberOne = 40;

    console.log(numberOne); // 가장 가까운 변수
}

levelOne();
console.log(numberOne);

function levelOne(){
    var numberOne = 50;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`levelTwo NumberOne : ${numberOne}`);
        console.log(`levelTwo NumberTwo : ${numberTwo}`)
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne);
// console.log(numberTwo); 하위 스코프로 접근 안됨

/**
 * JavaScript -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope -> 실행한 위치가 상위 스코프를 정한다.
 * 
 * 아래 코드 예시를 보자면 실행된 위치의 상위스코프면 100인거고 선언된 위치의 상위스코프면 3이 되는 것
 */

var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}

function functionTwo(){
    console.log(numberThree);
}

functionOne();

var i = 999;

for(var i = 0; i < 10; i++){
    console.log(i);
}

console.log(`i in global scope : ${i}`);

i = 999;

// block level scope
for(let i = 0 ; i < 10; i++){
    console.log(i);
}

console.log(`i in global scope : ${i}`);


/**
 * var 키워드는 함수레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다. 여기서 블록레벨 스코프란 {} 로 둘러싸인 코드 영역에서 선언된 변수가 해당 블록 내에서만 유효하도록함
 */