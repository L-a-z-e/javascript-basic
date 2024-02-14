/**
 * Super and Override
 */

class User{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`
    }

}


class femaleUser extends User{
    gender;

    constructor(name, year, gender){
        // this.name = name;
        // this.year = year;
        super(name, year); // 부모의 constructor로 대체
        this.gender = gender;
    }

    sayHello(){
        // return `안녕하세요 ${this.name}입니다. ${this.gender}입니다.` // 안타깝게도 super.name이 아니라 this.name 임 다른 언어들은 super가 맞음. property 불러올때는 this를 써야함
        return `${super.sayHello()} ${this.gender}입니다.` // 메서드는 super 사용 가능
    }


}

const user1 = new femaleUser('female', 2000, '여성');
console.log(user1);
console.log(user1.sayHello());

console.log('-----');

const user2 = new User('laze', 2024);
console.log(user2.sayHello());