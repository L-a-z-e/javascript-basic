/**
 * Callback
 */

function waitAndRun(){
    setTimeout(() => {
        console.log('End');
    }, 2000);
}

waitAndRun();

function waitAndRun2(){
    setTimeout(()=>{
        console.log('1번 Callback 끝');

        setTimeout(()=>{
            console.log('2번 Callback 끝');

            setTimeout(()=>{
                console.log('3번 Callback 끝');
            },2000)
        },2000)
    },2000)
}

waitAndRun2();

/**
 * Promise
 */

const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    },2000);
})

timeoutPromise.then((res) => {
    console.log('---then---');
    console.log(res);
});

const getPromise = (second) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, second * 1000)
})

getPromise(5).then((res) => {
    console.log('----getPromise----');
    console.log(res);

    return getPromise(1);
}).then((res) => {
    console.log('---second then---')
    console.log(res);

    return getPromise(5);
});


getPromiseReject = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('에러');
    }, seconds * 1000);
})

getPromiseReject(5).then((res) => {
    console.log('----getPromise----');
    console.log(res);

    return getPromise(1);
}).catch((res) => {
    console.log('---first catch---');
    console.log(res);
}).finally(() => {
    console.log('----finally----');
})

Promise.all([
    getPromise(1),
    getPromise(2),
    getPromise(3), // 가장 느린 함수 기준으로 then, catch가 불린다. 6초가 아니라 3초 ( 실행은 동시에 됨 )

]).then((res) => {
    console.log(res);
})