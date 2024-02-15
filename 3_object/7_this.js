/**
 * this
 * 
 * JS는 Lexical Scope를 사용하기때문에 함수의 상위 스코프가 정의 시점에서 평가된다.
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */

const testFunction = function(){
    return this;
}

console.log(testFunction()); // global object에 맵핑됨
console.log(testFunction() === global);

const user = {
    name: 'laze',
    year: 2024,
    sayHello: function(){
        return `${this.name}입니다.`
    }
}

console.log(user.sayHello());

function Person(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name}입니다.`
    }
}

const user2 = new Person('laze', 2024);
console.log(user2.sayHello());

Person.prototype.dance = function(){
    function dance2(){
        return `${this.name} 춤`
    }
    return dance2();
}

console.log(user2.dance());

/**
 * this 키워드가 어떤걸 가르키냐
 * 1) 일반 함수 호출 -> this 가 최상위 객체 global 또는 window
 * 2) 메서드로 호출할땐 호출된 객체
 * 3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가리킨다.
 */


/**
 * this binding
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName(){
    return this.name;
}

console.log(returnName());

const user3 = {
    name: 'laze',
}

/**
 * apply -> argument를 리스트로 입력해야한다.
 * 첫번째 요소를 this에 바인딩하고 뒤에는 리스트로 함수에 전달
 */
console.log(returnName.apply(user3));

/**
 * call -> ,를 기반으로 argument를 순서대로 넘겨줌
 * 첫번째 요소를 this에 바인딩하고 뒤에는 , 로 구분해서 함수에 전달
 */
console.log(returnName.call(user3));

function multiply(x, y, z){
    return `${this.name} / 결과값 : ${x * y * z}`
}

console.log(multiply.call(user3, 2, 3, 4));

console.log(multiply.apply(user3, [2,3,4]));

/**
 * bind()
 * call(), apply()는 바로 함수를 실행하고 bind()는 바로 함수를 실행하지않고 반환만 해줌.
 */

const laterFunction = multiply.bind(user3, 3, 4, 5);
console.log(laterFunction);
console.log(laterFunction());