//print all numbers between -10 and 19
for(var i=-10; i<=19; i++){
    console.log(i)
}

//print all even numbers between 10 nd 40
for(var i=10; i<=40; i+=2){
    console.log(i)
}

//OR
for(var i=10; i<=40; i+=1){
    if(i % 2===0){
        console.log(i) 
    } 
}

//print all odd numbers between 300 and 333
for(i=301; i<=333; i+=2){
        console.log(i)     
}

//OR
for(var i = 300; i<=333; i++){
    if(i % 2 !==0){
        cosole.log(i)
    }
}

//print all numbers divisible by 5 and 3 between 5 and 50

for(var i = 5; i <= 50; i++){
    if (i % 5 ===0 && i % 3 ===0){
        console.log(i)
    }
}