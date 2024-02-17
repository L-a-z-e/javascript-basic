
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000)
});

async function runner(){
    try{
        const result1 =  await getPromise(1);
        console.log(result1);
    }catch(e){
        console.log('error')
    }

}   

runner();
console.log('실행끝');