/**
 * Getter & Setter
 */

class exampleClass {
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    get nameAndYear(){
        return `${this.name}-${this.year}`
    }

    set setName(name){
        this.name = name;
    }
}

/**
 * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
 * 2) private한 값을 반환할 때
 */

const user1= new exampleClass('laze', '2024');
console.log(user1);
console.log(user1.nameAndYear);
// console.log(user1.nameAndYear()); function이 아님 

user1.name = 'lll' // private 인 경우에는 setter가 필요함
console.log(user1.nameAndYear);
user1.setName = 'laze';
console.log(user1);

class exampleClass2{
    #name; // ES7 부터 적용됨
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const user2 = new exampleClass2('laze', 2024);
console.log(user2);
console.log(user2.name);
user2.name = '1111'
console.log(user2);
console.log(user2.name);


/**
 * user2.setName('llll'); -> user2.setName is not a function Erorr가 나오는 이유
 * user2.setName = 'llll';
 * JavaScript는 setName을 메서드 호출이 아닌 속성 할당으로 인식하고, 내부적으로 setName setter를 실행
 * 따라서 user2.setName('llll');와 같이 함수 호출 형식으로 쓰면, JavaScript는 setName을 일반 메서드로 인식하려 하므로 에러가 발생
 * setName은 setter로 정의되었으므로, 일반 메서드가 아니기 때문
 */