/**
 * try ... catch
 * 
 * 1) 발생시킬때 -> throw
 * 2) 명시적으로 인지할 때 -> catch
 */

function runner(){
    try{
        console.log('hello');

        throw new Error('error 발생');
    
        console.log('world');
    }catch(e){
        console.log('---catch---');
        console.log(e);
    }finally{
        console.log('---finally---')
    }

}

runner();