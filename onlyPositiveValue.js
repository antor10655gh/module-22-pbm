onlyPositive = (numbers) => {
    positveNumber = [];
    for(let positiveValue of numbers){
        if(positiveValue < 0){
            break;
        }
        else{
            positveNumber.push(positiveValue);
        }
        
    }
    return positveNumber;
}

let numbers = [2, 4, 7, 9, 12, 24, -25, 30, 35];
let positiveValue = onlyPositive(numbers);
console.log(positiveValue);