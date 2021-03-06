/* printReverse()
write a function out the elements in the array in reverse 
order (don't actually reverse the array itself) */

function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

printReverse([3,6,2,5]);

//****************

/* isUniform()
write a function isUniform() which akes an array as an argument 
and returns true if all elements in the array are identical*/

function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false
        }
    }
    return true;
}

//****************

/* sumArray()
wriite a function sumArray() that accepts an array of 
a numbers and returns the sum of all numbers in the 
array */

function sumArray(arr){
    var total = 0;
    arr.forEach(function(element) {
        total+=element
    });
    return total;
}

//****************

/* max()
write a function max() that accepts an array of numbers 
and returns the maximum number in the array */

function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    } 
    return max;
}