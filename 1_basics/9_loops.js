/**
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 10; i > 0; i--){
    console.log(i);
}

for(let i=1; i < 10 ; i++){
    for(let j=1; j < 10 ; j++){
        console.log(i, '*', j, '=', i*j);
    }
}

/**
 * for ... in
 */

const git = {
    name: 'L-a-z-e',
    email: 'yysi8771@gmail.com',
    url: 'github.com/L-a-z-e',
}

// object 에서는 key값을 받을 수 있다.
for(let key in git){
    console.log(key);
    console.log(`${key}: ${git[key]}`)
}

const memberArray = ['홍길동', '유관순', '아무개'];

// Array에서는 index를 반환
for(let key in memberArray){
    console.log(key)
    console.log(`${key}: ${memberArray[key]}`)
}


/**
 * for ... of
 * Array에서 사용가능 (값)
 */

for(let value of memberArray){
    console.log(value);
}

// iterable 만 가능
// for(let value of git){
//     console.log(value)
// }


/**
 * While
 */

let number = 0;
while(number < 10){
    console.log(number);
    number++;
}

/**
 * do... while
 */

do{
    console.log(number);
    number++;
}while(number < 20)

/**
 * break
 */

for(let i = 0; i < 10; i++){
    if(i === 5)
        break;
    console.log(i);

}

/**
 * continue
 */

for(let i = 0; i < 10; i++){
    if(i === 5)
        continue;
    console.log(i);
}