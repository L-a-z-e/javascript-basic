/**
 * 객체를 선언할 때 사용 할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class 와 OOP
 * 3) function을 사용해서 객체 생성
 */

// 1번 방법
const user = {
    name: 'laze',
    yaer: 2024,
}

console.log(user);

// 2번 방법
class User {
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

console.log(new User('laze', 2024));

// 3번 방법
// 생성자함수 this keyword로 property를 할당을 해야만 new 키워드 사용가능함.
function UserFunction(name, year){
    this.name = name;
    this.yaer = year;
}

const user2 = new UserFunction('laze', 2024);
console.log(user2);

/**
 * { name: 'laze', yaer: 2024 }
 * User { name: 'laze', year: 2024 }
 * UserFunction { name: 'laze', yaer: 2024 }
 * 모두 객체임
 */