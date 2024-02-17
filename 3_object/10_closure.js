/**
 * A closure is the combination of a function and the lexical environement within which that function was declared
 * 
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다.
 */

function getNumber(){
    var number = 5 ;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

// console.log(getNumber()) ;

function getNumber(){
    var number = 6;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */

function cacheFunction(newNumber) {
    // 아래 계산이 매우 오래 걸린다는 가정을 했을 때
    var number = 10 * 10;

    return number * newNumber
}

console.log(cacheFunction(10));
console.log(cacheFunction(20));
console.log(cacheFunction(30));
// 다음과 같이 변경

function cacheFunctionExample(newNumber2){
    var number = 10 * 10;

    function innerCacheFunction(newNumber2){
        return number * newNumber2;
    }

    return innerCacheFunction
}

const runner2 = cacheFunctionExample();

console.log(runner2(10));

function cacheFunction2(){
    var number = 99;

    function increment(){
        number++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 정보 은닉
 */

function User(name, year){
    this.name = name;
    var _year = year;

    this.sayNameAndYear = function(){
        return `${this.name} ${_year}`
    }
}

const user = new User('laze', 2024);
console.log(user.sayNameAndYear());

console.log(user._year); // this keyword로 저장해놓지 않아서 객체의 프로퍼티를 액세스 할 수는 없음.