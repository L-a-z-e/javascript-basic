/**
 * Class Keyword
 * 
 */

class exampleClass {
    name; // property
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

// constructor - 생성자

const user1 = new exampleClass();
console.log(user1);

const user2 = new exampleClass('laze', '2024');
console.log(user2);

console.log(user2['name']);
console.log(user2.name);

console.log(typeof(user2['name']));
console.log(typeof(user2.name));

class exampleClass2 {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `이름은 ${this.name}`;
    }
}

const user3 = new exampleClass2('laze', '2024');
console.log(user3);
console.log(user3.sayName());

console.log(typeof exampleClass2); // type 이 function 이라고 나옴 -> class 가 function type
console.log(typeof user3); // type 이 object -> class 로 생성한 instance 는 object type