centimeterToMeter = (cmValue) => {
    let meter = cmValue / 100;
    return meter; 
}

let centemeterValue = 10;
let meterValue = centimeterToMeter(centemeterValue);
console.log(meterValue);