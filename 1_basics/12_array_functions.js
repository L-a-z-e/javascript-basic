/**
 * Array Functions
 */

let members = [
    '홍길동',
    '유관순',
    '이순신',
]

console.log(members);

//push() members를 직접적으로 변경을 했다.
members.push('laze');
console.log(members);
console.log(members.push('member1')); // 맨 끝에 추가하고 추가한 길이를 return해줌

//pop() 마지막 element를 반환하고 삭제
console.log(members.pop());
console.log(members);

//shift() 첫번째 element를 반환하고 삭제
console.log(members.shift());
console.log(members);

//unshift() 
console.log(members.unshift('홍길동'));
console.log(members);

console.log("----")
//splice(i,n) i번쨰부터 n개를 반환하고 삭제
console.log(members.splice(0,1));
console.log(members);
console.log(members.splice(0,3));
console.log(members);

members = [
    '홍길동',
    '유관순',
    '이순신',
]

//concat() -> 새로운 array를 만들어서 반환해줌. 기존 members는 변경하지 않음 <-> push는 원래 array를 변경함
console.log(members.concat('laze'));
console.log(members);

//slice() -> 마찬가지로 splice는 원본 변경하나 slice는 그렇지 않음 slice(n,m) n번 index 부터 m번 index 이전까지만 반환
console.log(members.slice(0, 2));
console.log(members);

//spread operator 펼쳐서 넣는다는 개념 
let members2 = [
    ...members,
]

console.log(members2);

// 그냥 넣으면 [ [] ] array 안에 array 구조로 들어감
let members3 = [
    members,
];

console.log(members3);

// 주소를 째로 넣으면 true를 반환하고 똑같이 출력됨
let members4 = members;
console.log(members4);
console.log(members === members4);

// 똑같이 출력되도 주소가 다르기때문에 false를 반환함
console.log([
    ...members,
] === members);

// join() 모든 요소를 string으로 엮을때 사용 default ,
console.log(members.join());
console.log(members.join('/'));
console.log(members.join(', '));
console.log(typeof members.join());

// sort()
// 오름차순
// reverse()
// 내림차순
// 원래 array가 변경됨
members.sort();
console.log(members);

members.reverse();
console.log(members);

let numbers = [
    1,
    9,
    7,
    5,
    3,
]

console.log(numbers);

/**
 * a, b를 비교했을 때
 * 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
 * 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a,b) => {
    return a > b ? 1 : -1;
})
console.log(numbers);

numbers.sort((a,b) => a > b ? -1 : 1);
console.log(numbers);

// map() 모든 요소를 순회하면서 각각 처리
// 원본은 변경하지 않음
console.log(members.map((x) => x));
console.log(members.map(x => `member : ${x}`));

console.log(members.map((x) => {
    if(x === '홍길동'){
        return `member: ${x}`
    }
    else{
        return x;
    }
}))

console.log(members);

// filter() true 면 반환값에 들어가고 false면 안들어감
// 원본은 변경하지 않음
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter(x => true));
console.log(numbers.filter(x => false));
console.log(numbers.filter(x => x % 2 == 0));
console.log(numbers);

// find() 첫번째 값만 반환함
// 원본은 변경하지 않음
console.log(numbers.find(x => x % 2 === 0));
console.log(numbers);

// findIndex() index를 반환
// 원본은 변경하지 않음
console.log(numbers.findIndex(x => x % 2 === 0));
console.log(numbers);

// reduce() 
// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
// 1번째는 function currentValue 부분에 배열에서 하나씩 들어가고 함수 처리한 return 값이 다시 previous에 들어가는 구조, 제일 처음에는 2번째 argument가 들어감
// 2번째 argument는 초기값
console.log(numbers.reduce((previous, current) => previous + current , 0));