/**
 * JavaScript는 Single Thread다.
 */

function longWork(){
    const now = new Date();

    /**
     * milliseconds since epoch
     * 1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환한다.
     */

    const milliseconds = now.getTime();
    const afterTwoSeconds = milliseconds + 2 * 1000;

    while(new Date().getTime() < afterTwoSeconds){

    }

    console.log('완료');
}

console.log('Hello');
longWork();
console.log('World');

function longWork2(){
    setTimeout(() => { // setTimeou은 비동기 함수
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork2();
console.log('World');

/**
 * Event Loop
 * 비동기 함수가 실행이되면 -> CallStack에서 Task Que, Event Que 로 이동함
 * Event Loop는 Task, Event Que가 비어있는지 확인, CallStack이 비어있는지 확인 -> Task Que에서 다시 Call Stack으로 비동기 함수를 이동시킴
 */