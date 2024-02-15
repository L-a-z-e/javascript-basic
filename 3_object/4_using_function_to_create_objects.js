/**
 * Using function to create objects
 */

function User(name, year){
    console.log(new.target); // new.target -> this 가 어디 붙었는지 알 수 있음. User('laze',2024) -> undefined 
    console.log(this);

    // undefined시 처리 -> 생성자함수로 실행되도록 User 안에서 User 생성자함수 호출
    if(!new.target){  
        return new User(name,year); 
    }
    this.name = name;
    this.year = year;

    // return {};  object 를 반환하면 밑에 무슨값을 셋팅하던 object만 return됨
    // return 123; // return 값 상관없이 파라미터로 넘긴 값대로 object 생성됨

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`
    }
}

const user1 = new User('laze', 2024);
console.log(user1);
// console.log(user1.dance());

const user2 = User('laze',2024);
console.log(user2); // new 키워드를 사용하지 않으면 undefined 출력
// console.log(global); // this keyword 가 new를 안쓰면 global에 붙음
// new 키워드를 쓰면 this를 어디에 맵핑하는지 정하는 것

const UserArrow = (name, year) => {
    this.name = name;
    this.year = year;
}

// const user3 = new UserArrow('laze',2024); new 키워드는 일반 함수에서만 사용할 수 있음. Arrow 함수에서는 사용할 수 없음.
