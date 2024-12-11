// --Create function Return a Boolean if a number is divisible by 10

function test (number){

    if(number % 10 == 0){
       return true
    }
    else{
        return false
    }
}

console.log(test(7))

// --Create a function that finds the maximum number in an array

let arr=[1, 3, 55, 85, 60, 77, 108];


function maximum(arr){
    let result=  arr[0];
    for(let i=1; i < arr.length; i++){
        if(arr[i] > result)
            result = arr[i]
    }
    return result
}

console.log(maximum(arr));

// --Create a function that reverses an array

let arrr= [1, 2, 3, 4, 5, 6, 7] 

function reverse(arrr){
    let newArray=0
    if(newArray == 0){
        arrr.reverse()
    }
    return arrr
}

console.log(reverse(arrr))