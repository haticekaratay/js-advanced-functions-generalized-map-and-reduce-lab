function map(arr,f){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(f(arr[i]));
    }
    return newArray;
};

function reduce(arr,f,startingPoint){
    let total = 0;
    if(startingPoint){
        total = startingPoint;
        for(let i = 0; i < arr.length; i++){
            total = f(arr[i],total)
        }
    }else{
        total =arr[0];
        for(let i = 1; i < arr.length; i++){
            total = f(arr[i],total)
        }
    }
    return total;
};
//console.log(reduce([1,2,3],function(e, memo){return e + memo}, 100))
