/* function isEven() which takes a single numeric argument 
and returns true if the number is even, and false otherwise */

function isEven(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

/* OR another shorter solution
function isEven(num){
    return num % 2 === 0;
}*/

/* function factorial() which takes a single numeric 
argument and returns the factorial of that number */

function factorial(num){
    var result = 1;
    for(var i = 2; i <=num; i++){
        result = result * i;
    }
    return result;
}

/* OR another soulution - different direction
function factorial(num){
    if(num === 0){
        return 1;
    }
    var result = num;
    for(var i = num-1; i >=1; i--){
        result = result * i;
    }
    return result;
}
*/

/* funcion kebabToSnake() which takes a single kebab-cased
string argument and eturnt the snake_cased version */

function kebabToSnake(str){
    //replace all '-' with '_''s
    var newStr = str.replace(/-/g, "_");
    //return str
    return newStr;
}