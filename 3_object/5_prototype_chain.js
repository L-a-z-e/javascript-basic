/**
 * Prototype
 * 
 * user1 객체
 * name laze
 * year 24 만 생성했는데
 * __proto__ 도 생김 
 * user1 객체의 __proto__ === User.prototype 이고
 * User.prototype.constructor === User 인데
 * User.prototype === User.prototype
 * 
 * 실제로 User Function에서 new keyword 로 user1 객체 생성
 * User의 prototype 이 user1의 __proto__ 가 됨
 */

const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티
// class -> 상속에서 부모 클래스에 해당되는 값
console.log(testObj.__proto__);

function User(name, year){
    this.name = name;
    this.year = year;
}

console.log(User.prototype); 

console.dir(User.prototype, {
    showHidden: true
})

// circular reference
console.log(User.prototype.constructor === User);
console.log(User.prototype.constructor.prototype === User.prototype);

const user1 = new User('laze', 2024);

console.log(user1.__proto__);
console.log(user1.__proto__ === User.prototype);

console.log(testObj.__proto__ === Object.prototype);
console.log(testObj.__proto__ === User.prototype);


console.log(User.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(User.prototype.__proto__ === Object.prototype); // 모든값들의 최상위는 Object.prototype 이 있음

console.log(user1.toString());
console.log(Object.prototype.toString());


console.log(Object.prototype);
console.dir(Object.prototype, {
    showHidden: true
})

console.log(User.prototype);
console.dir(User.prototype, {
    showHidden: true
})

function User2(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name} 이 인사를 합니다.`;
    }
}

const user2 = new User2('laze', 2024);
const user3 = new User2('홍길동', 2024);

console.log(user2.sayHello());
console.log(user3.sayHello());

console.log(user2.sayHello === user3.sayHello);

console.log(user2.hasOwnProperty('sayHello')); // true 가 나오면 고유 property , 상속받은 것이 아님

function User3(name, year){
    this.name = name;
    this.year = year;
}

User3.prototype.sayHello = function(){
    return `${this.name} 이 인사를 합니다.`;
}

const user4 = new User3('laze', 2024);
const user5 = new User3('홍길동', 2023);

console.log(user2.sayHello === user3.sayHello); // 객체별로 생성됨
console.log(user4.sayHello === user5.sayHello); // memory 동일 , 효율적으로 코딩할 수 있음

console.log(user4.hasOwnProperty('sayHello')); // 상속받은 값

User3.staticMethod = function(){
    return 'static';
}

console.log(User3.staticMethod());

/**
 * Overriding
 */

function User4(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return 'overriding instance method'
    }
}

User4.prototype.sayHello = function() {
    return 'prototype method';
}

const user6 = new User4('laze', 2024);

// 프로퍼티 셰도잉 -> class 에서 override
console.log(user6.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function User5(name, year){
    this.name = name;
    this.year = year;
}

User5.prototype.sayHello = function(){
    return `${this.name} 인사`;
}

function FemaleUser(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤`;
    }
}

const user10 = new User5('laze', 2000);
const user11 = new FemaleUser('유관순', 2001);

console.log(user10.__proto__);
console.log(user10.__proto__ === User5.prototype);
console.log(Object.getPrototypeOf(user10) === User5.prototype);
console.log(user10.__proto__ === Object.getPrototypeOf(user10));

console.log(user10.sayHello()); // User5 
console.log(user11.dance()); // FemaleUser
console.log(Object.getPrototypeOf(user11) === FemaleUser.prototype);

Object.setPrototypeOf(user11, User5.prototype);
console.log(user11.sayHello());
console.log(user11.constructor === FemaleUser);
console.log(user11.constructor === User5)
console.log(Object.getPrototypeOf(user11) === FemaleUser.prototype);
console.log(FemaleUser.prototype === User5.prototype);

FemaleUser.prototype = User5.prototype; // prototype 을 그대로 변경도 가능함

const user12 = new FemaleUser('laze', 2000);
console.log(Object.getPrototypeOf(user12) === FemaleUser.prototype);
console.log(FemaleUser.prototype === User5.prototype); 

console.dir(FemaleUser.constructor, {
    showHidden:true
})
console.dir(FemaleUser.prototype, {
    showHidden: true
});

console.dir(FemaleUser.__proto__, {
    showHidden: true
})

console.dir(User5.constructor, {
    showHidden: true
})

console.dir(User5.prototype, {
    showHidden: true
})

console.dir(User5.__proto__, {
    showHidden: true
})

console.dir(user11.constructor, {
    showHidden: true
})