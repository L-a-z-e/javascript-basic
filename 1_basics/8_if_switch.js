/**
 * If & Switch
 */

let number = 5;

if (number % 2 === 0){
    console.log('짝수');
}
else{
    console.log('홀수');
}

const dayInEnglish = 'monday';

let dayInKorean;

switch(dayInEnglish){
    case 'monday':
        dayInKorean = '월요일';
        break;
    case 'tuesday':
        dayInKorean = '화요일';
        break;
    default:
        dayInKorean = '기타';
        break;
}

console.log(dayInKorean);