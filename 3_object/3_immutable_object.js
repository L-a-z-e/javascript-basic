/**
 * Immutable Object
 */

const user = {
    name: 'laze',
    year: 2024,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

/**
 * Extensible
 */

console.log(Object.isExtensible(user)); // 객체 생성시 default 는 true

user['job'] = 'developer'; // Extensible

console.log(user);

Object.preventExtensions(user);

console.log(Object.isExtensible(user));

user['group'] = 'git'; // Error를 던지지는 않으나 값을 추가하지 못함

console.log(user);

delete user['job']; // 추가는 안되지만 삭제는 가능하다.
console.log(user);


/**
 * Seal
 */

const user2 = {
    name: 'laze',
    year: 2024,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(user2)

console.log(Object.isSealed(user2)); // default false

Object.seal(user2);

console.log(Object.isSealed(user2)); // true

user2['group'] = 'git'; // 추가되지 않음
console.log(user2);
delete user2['name']; // 삭제되지 않음
console.log(user2);

Object.defineProperty(user2, 'name', {
    valuie: 'laze',
});

console.log(Object.getOwnPropertyDescriptors(user2)); // writable = true, enumerable = true , configurable = false -> seal => configurable을 false로 만드는 것과 동일하다.

/**
 * Freezed
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */

const user3 = {
    name: 'laze',
    year: 2024,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isFrozen(user3)); // default = false
Object.freeze(user3);
console.log(Object.isFrozen(user3));

user3['group'] = 'git';
console.log(user3);

delete user3['name'];
console.log(user3);

// Cannot redefine property Error 발생
// Object.defineProperty(user3, 'name', {
//     value: 'lll'
// })

console.log(Object.getOwnPropertyDescriptors(user3)); // writable : false, enumerable : true, configurable : false


const user4 = {
    name: 'laze',
    year: 2024,
    user5: {
        name: '홍길동',
        year: 1999,
    }
}

Object.freeze(user4);

console.log(Object.isFrozen(user4));
console.log(Object.isFrozen(user4['user5']));

// Object 안의 object 에서 상위 Object 를 freeze , seal, extensible 설정한다고해서 하위 Object 도 바뀌는건 아니다.
// 처리하고자 한다면 재귀적으로 하나하나 해야함
