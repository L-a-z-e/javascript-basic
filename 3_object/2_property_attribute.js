/**
 * Property Attribute
 * 
 * 1) Data Property - key : value 실질적으로 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티
 *    예를들어 getter, setter
 */

const user = {
    name: 'laze',
    year: 2024,
}

console.log(Object.getOwnPropertyDescriptor(user, 'name')); // static function
console.log(Object.getOwnPropertyDescriptor(user, 'year')); // static function

/**
 * 1) value - 실제 property 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부. for ...in loop 등을 사용할 수 있으면 true 반환
 * 4) configurable - property attribute 재정의가 가능한지 여부를 판단한다.
 *    false일 경우 property 삭제나 attribute 변경이 금지된다.
 *    단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptors(user));

const user2 = {
    name: 'laze', // Data Property
    year: 2000,

    get age(){ // 액세서 프로퍼티
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(user2);
console.log(user2.age);
user2.age = 30;
console.log(user2.age);
console.log(user2.year);

console.log(Object.getOwnPropertyDescriptor(user2, 'age')); // Data Property와 다르게 value, writable 이 없고 get, set이 있음

Object.defineProperty(user2, 'height',{
    value: 180,
    writable: true,
    enumerable: true,
    configurable: true,
})

console.log(user2);
console.log(Object.getOwnPropertyDescriptors(user2)); // 설정하지 않으면 false 가 default

user2.height = 190;
console.log(user2);

Object.defineProperty(user2, 'height', {
    writable: false,
})

user2.height = 200;
console.log(user2);

// Enumerable

console.log(Object.keys(user2));
for(let key in user2){
    console.log(key);
}

Object.defineProperty(user2, 'name', {
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptors(user2));

for(let key in user2){
    console.log(key);
}

console.log(user2.name); // 사라지진 않았으나 열거가 불가능하게 만듦

// Configurable
Object.defineProperty(user2, 'height', {
    writable: true,
    configurable: false,
})

// Object.defineProperty(user2, 'height', {
//     configurable: false,
// })

console.log(Object.getOwnPropertyDescriptors(user2));

// Object.defineProperty(user2, 'height', {
//     enumerable: false,
// }) Configurable false 설정으로 변경 불가능해짐

// writable true, configurable: false  인경우 

Object.defineProperty(user2, 'height',{
    value: 170,
})

console.log(Object.getOwnPropertyDescriptors(user2));

Object.defineProperty(user2, 'height',{
    writable: false,
})

console.log(Object.getOwnPropertyDescriptors(user2));

// Object.defineProperty(user2, 'height', {
//     writable: true,
// })
// 다시 변경하면 오류 발생함 writable : true, configurable : false -> writable : false 나 value property 변경은 가능 -> false로 한번 바꾸면 다시 돌릴 수 없음