/**
 * Static Keyword
 */

class exampleClass{
    name;
    year;
    static groupName = 'blog'; // Class 자체에 귀속 <-> Instance에 귀속되는 것이 아님

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static returnGroupName(){
        return `${this.groupName}`
    }
}

const user1 = new exampleClass('laze', 2024);
console.log(user1);

console.log(exampleClass.groupName);

/**
 * factory constructor
 */

class exampleClass2{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new exampleClass2(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new exampleClass2(
            list[0],
            list[1],
        )
    };
};

const user2 = exampleClass2.fromObject({
    name: 'laze',
    year: 2024,
});

console.log(user2);

const user3 = exampleClass2.fromList([
    'laze',
    2024,
])

console.log(user3);

/**
 * fromList 메서드에서 list[0]과 list[1]이 name과 year로 할당되는 것은 exampleClass2의 생성자 함수(constructor) 때문
 * 자바스크립트 클래스에서 new 키워드를 사용하여 객체를 생성할 때, constructor 함수를 호출
 * 이 constructor 함수는 클래스의 인스턴스를 초기화하는 역할
 * exampleClass2 클래스의 constructor 함수는 두 개의 매개변수 name과 year를 받음 
 * 그리고 이 매개변수들은 각각 this.name과 this.year에 할당
 * 따라서 fromList 메서드에서 new exampleClass2(list[0], list[1])를 호출하면, list[0]은 name으로, list[1]은 year로 constructor에 전달되어 할당
 * 즉, list[0]과 list[1]이 name과 year로 할당되는 것은 fromList 메서드가 아니라 constructor 함수가 수행하는 작업
 */