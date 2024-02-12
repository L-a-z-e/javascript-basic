/**
 * Object 객체
 */

// key : value pair
// 여기서 this는 현재 함수가 정의되어있는 객체를 가리킴
let object1 = {
    name: 'laze',
    group: 'outrun',
    method1: function(){
        return `${this.name} method1 function`;
    }
};

console.log(object1);
console.log(object1.name);
console.log(object1['name']);

const key = 'name';

console.log(object1[key]);

console.log(object1.method1);
console.log(object1.method1());

const nameKey = 'name';
const nameValue = 'laze';

const groupkey = 'group';
const groupValue = 'git';

const object2 = {
    [nameKey]: nameValue,
    [groupkey]: groupValue,
    method2: function(){
        return `${this.name} method2 function`;
    }
};

console.log(object2);
console.log(object2.method2());

object2['group']='blog';
console.log(object2);

object2['newKey']='newValue';
console.log(object2);

delete object2['newKey'];
console.log(object2);

/**
 * 객체의 특징
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

const object3 = {
    name: 'laze',
    group: 'blog',
}

console.log(object3);
// const 객체 자체는 변경 할 수 없다.
// object3 = {};
// console.log(object3);


/**
 * 모든 키 값 다 가져오기
 */

console.log(Object.keys(object2));
console.log(Object.values(object2));

const name = 'laze'

// key 랑 value 가 name: name 이면 이렇게도 사용 가능
const object4 = {
    name
};

console.log(object4);