/**
 * 상속은 객체들 간의 관계를 구축하는 방법이다.
 * 수퍼클래스, 부클래스 등의 기존클래스로부터 속성과 동작을 상속받을 수 있다.
 */

class user{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class femaleUser extends user {
    dance(){
        return '춤을 춥니다.';
    }
}

class maleUser extends user {
    sing(){
        return '노래를 부릅니다';
    }
}

const user1 = new femaleUser('female', 2000); // constructor도 상속받음
console.log(user1);

const user2 = new maleUser('male', 2002);
console.log(user2);

console.log(user1.dance());
console.log(user1.name);

console.log(user2.sing());
console.log(user2.name);

// console.log(user1.sing()); maleUser만 가능

const laze = new user('laze', 2024);
console.log(laze);
// console.log(user.sing()); 부모가 자식클래스의 프로퍼티를 상속받을 수는 없음

console.log(user1 instanceof user);
console.log(user1 instanceof femaleUser);
console.log(user1 instanceof maleUser);

console.log(laze instanceof user);
console.log(laze instanceof femaleUser);
console.log(laze instanceof maleUser);