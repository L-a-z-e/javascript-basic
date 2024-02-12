/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reference다.
 */

// copy by value
let original = 'string1';
let clone = original;

clone += ' add';
console.log(original);
console.log(clone);

let originalObj = {
    name: 'laze',
    group: 'blog',
};

let cloneObj = originalObj;

originalObj['group'] = 'blog';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

let originalObj2 = {
    name:'laze',
    group:'blog',
}

let cloneObj2 = {
    name:'laze',
    group:'blog',
}

console.log(originalObj2 === cloneObj2);

const obj1 = {
    name: 'laze',
    group: 'git',
}

const obj2 = obj1;

const obj3 = {
    name: 'laze',
    group: 'git',
}

console.log(obj1 === obj2);
console.log(obj1 === obj3);
console.log(obj2 === obj3);

/**
 * Spread Operator
 * copy by value 로 복사함
 */

const obj4 = {
    ...obj3,
};

console.log(obj4);
console.log(obj4 === obj3);

const obj5 = {
    year: 2024,
    ...obj3,
};
console.log(obj5);

//순서가 중요함, spread 한 것에서 동일한 키값이 있으면 나중에 나온게 덮어씌워짐
const obj6 = {
    name: 'name',
    ...obj3,
};

console.log(obj6);

const obj7 = {
    ...obj3,
    name: 'name'
};

console.log(obj7);